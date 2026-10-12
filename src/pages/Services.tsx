import ServicesSection from "@/components/ServicesSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Services = () => {
  usePageMeta(
    "Services",
    "Web, mobile, desktop, API, and SaaS development services built for startups and growing businesses in South Africa.",
  );

  return <ServicesSection />;
};

export default Services;
