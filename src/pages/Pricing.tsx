import PricingSection from "@/components/PricingSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Pricing = () => {
  usePageMeta(
    "Pricing",
    "Transparent pricing for web, mobile, desktop, API, SaaS, and AI & automation projects, plus monthly care plans for ongoing support.",
  );

  return <PricingSection />;
};

export default Pricing;
