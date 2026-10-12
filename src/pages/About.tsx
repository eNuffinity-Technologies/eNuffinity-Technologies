import WhoWeAreSection from "@/components/WhoWeAreSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const About = () => {
  usePageMeta(
    "About Us",
    "eNuffinity Technologies is a Johannesburg-based software company building secure, scalable digital solutions for businesses worldwide.",
  );

  return (
    <>
      <WhoWeAreSection />
      <CoreValuesSection />
    </>
  );
};

export default About;
