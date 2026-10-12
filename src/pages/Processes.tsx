import TechStackSection from "@/components/TechStackSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Processes = () => {
  usePageMeta(
    "Our Process",
    "A transparent, Agile-driven process from discovery to deployment — with security and compliance baked into every step.",
  );

  return <TechStackSection />;
};

export default Processes;
