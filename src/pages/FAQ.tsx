import FAQSection from "@/components/FAQSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const FAQ = () => {
  usePageMeta(
    "FAQ",
    "Answers to the questions we get asked most about pricing, timelines, security, and how we work.",
  );

  return <FAQSection />;
};

export default FAQ;
