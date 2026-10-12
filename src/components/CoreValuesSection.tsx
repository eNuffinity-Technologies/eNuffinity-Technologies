import { BulbIcon, ShieldCheckmarkIcon, PeopleIcon, GlobeIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: BulbIcon,
    title: "Innovation",
    description:
      "Constantly exploring new technologies — from AI-powered automation to modern cloud architecture — to deliver cutting-edge, future-proof solutions.",
  },
  {
    icon: ShieldCheckmarkIcon,
    title: "Reliability & Security",
    description:
      "Enterprise-grade security practices and encrypted integrations — essential when you're handling financial, health, or personal data across regulated industries like fintech, healthcare, and insurance.",
  },
  {
    icon: PeopleIcon,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships based on trust, transparency, and measurable results.",
  },
  {
    icon: GlobeIcon,
    title: "Local Roots, Global Standard",
    description:
      "Proudly South African, built to the security and engineering standards that let us serve clients locally and internationally with the same rigor.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Our Core <span className="heading-accent">Values</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            The principles that guide everything we build.
          </p>
        </div>

        <ul className="max-w-4xl mx-auto divide-y divide-border/60">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              as="li"
              delay={i * 100}
              variant="left"
              className="flex items-start gap-5 py-6 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreValuesSection;
