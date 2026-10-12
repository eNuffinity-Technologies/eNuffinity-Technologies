import {
  TrendingUpIcon,
  FlashIcon,
  ShieldCheckmarkIcon,
  CheckmarkCircleIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const outcomes = [
  {
    icon: TrendingUpIcon,
    title: "Stronger commercial presence",
    description:
      "Modern, fast websites that convert visitors into customers and amplify every marketing rand you spend.",
  },
  {
    icon: FlashIcon,
    title: "Faster delivery, lower cost",
    description:
      "Automation and integrations that remove manual work — so your team ships more with less overhead.",
  },
  {
    icon: ShieldCheckmarkIcon,
    title: "Enterprise-grade by default",
    description:
      "Security, compliance, and observability baked in from day one — built for regulated industries and global scale.",
  },
];

const features = [
  "Expert team of developers and engineers",
  "Agile development methodology",
  "Transparent communication",
  "On-time delivery guaranteed",
  "Post-launch support & maintenance",
  "Competitive pricing models",
  "POPIA & GDPR compliant",
  "Secure API integrations",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-14 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need from a <span className="heading-accent">trusted technology partner</span>
          </h2>
          <p className="text-muted-foreground">
            The outcomes we deliver, and the standards we hold ourselves to on every project.
          </p>
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {outcomes.map((outcome, i) => (
            <Reveal
              key={outcome.title}
              delay={i * 120}
              variant="up"
              className="rounded-2xl p-6 bg-card border border-border/50 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <outcome.icon className="w-7 h-7 text-primary mb-3 relative z-10" />
              <h3 className="text-lg font-semibold mb-1 relative z-10">{outcome.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{outcome.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Standards checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <Reveal
              key={feature}
              delay={i * 50}
              variant="up"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-secondary/30 transition-all"
            >
              <CheckmarkCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
