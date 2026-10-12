import {
  GlobeIcon,
  ServerIcon,
  LayersIcon,
  SettingsIcon,
  GitBranchIcon,
  HardwareChipIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const capabilities = [
  {
    icon: GlobeIcon,
    title: "Digital Presence & Marketing",
    description:
      "High-converting websites, SEO foundations, and brand-aligned web experiences that strengthen your commercial presence and accelerate digital marketing efforts.",
  },
  {
    icon: ServerIcon,
    title: "CRM & Business Systems",
    description:
      "Custom CRMs, ERPs, dashboards, and internal tools tailored to how your team actually works — replacing spreadsheets with software that scales.",
  },
  {
    icon: LayersIcon,
    title: "Microservices & APIs",
    description:
      "Modern, decoupled architectures using REST, GraphQL, and event-driven services — built to evolve with your business without rewrites.",
  },
  {
    icon: SettingsIcon,
    title: "Process Automation",
    description:
      "Automate repetitive workflows, document handling, notifications, and integrations to cut costs, reduce errors, and dramatically improve delivery time.",
  },
  {
    icon: GitBranchIcon,
    title: "Third-Party Integrations",
    description:
      "Seamless collaboration with major service providers — built natively on the partner's tech stack so your operations feel like one connected system.",
  },
  {
    icon: HardwareChipIcon,
    title: "AI & Intelligent Workflows",
    description:
      "Embed AI assistants, document understanding, and decision automation into your existing products to unlock new efficiency without disruption.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-end engineering for <span className="heading-accent">growing businesses</span>
          </h2>
          <p className="text-muted-foreground">
            From sharpening your digital presence to automating mission-critical workflows —
            we partner with you across the entire software lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 90}
              variant="up"
              className="border border-border rounded-xl p-6 bg-card hover:bg-secondary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <cap.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
