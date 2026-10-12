import IndustriesIndexSection from "@/components/IndustriesIndexSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Industries = () => {
  usePageMeta(
    "Industries",
    "Every industry eNuffinity Technologies builds software for, from regulated finance to field operations.",
  );

  return <IndustriesIndexSection />;
};

export default Industries;
