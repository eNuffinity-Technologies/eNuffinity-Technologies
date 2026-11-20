// Smoke tests: every page renders without crashing.
// They run before every deploy, so a page that throws on load never reaches the live site.
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";
import { industries } from "@/data/industries";

vi.mock("@emailjs/browser", () => ({ default: { sendForm: vi.fn() } }));

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

const pages = ["/", "/services", "/about", "/pricing", "/processes", "/faq", "/contact", "/industries"];

describe("pages", () => {
  it.each(pages)("%s renders", (path) => {
    const { container } = renderAt(path);
    expect(container.textContent?.length).toBeGreaterThan(0);
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  it.each(industries.map((i) => i.slug))("/industries/%s renders", (slug) => {
    renderAt(`/industries/${slug}`);
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  it("unknown URLs show the 404 page", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    renderAt("/this-page-does-not-exist");
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
