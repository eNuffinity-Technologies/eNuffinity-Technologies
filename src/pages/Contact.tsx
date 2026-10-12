import ContactSection from "@/components/ContactSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Contact = () => {
  usePageMeta(
    "Contact",
    "Start a conversation with eNuffinity Technologies — tell us about your project and get a clear next step, not a sales pitch.",
  );

  return <ContactSection />;
};

export default Contact;
