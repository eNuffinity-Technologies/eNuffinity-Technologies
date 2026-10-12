import { useEffect } from "react";

const SITE_NAME = "eNuffinity Technologies";
const DEFAULT_TITLE = `${SITE_NAME} | Innovative Software Solutions`;
const DEFAULT_DESCRIPTION =
  "eNuffinity Technologies (PTY) LTD - Building innovative digital solutions. Web development, hosting, SaaS products, AI & Automation Services, Desktop and mobile apps.";

/** Sets the document title and meta description for the current page, restoring the site defaults on unmount. */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? DEFAULT_DESCRIPTION;

    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
