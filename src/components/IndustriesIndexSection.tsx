import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { industries, type Industry } from "@/data/industries";
import { ArrowForwardIcon } from "@/components/icons";

type Category = {
  title: string;
  slugs: string[];
};

const categories: Category[] = [
  {
    title: "Regulated & Financial",
    slugs: ["fintech", "healthcare", "insurance", "forensic"],
  },
  {
    title: "Commerce & Operations",
    slugs: ["ecommerce", "retail", "logistics", "manufacturing", "agriculture"],
  },
  {
    title: "People & Property",
    slugs: ["real-estate", "construction", "education", "hospitality"],
  },
  {
    title: "Services & Organisations",
    slugs: ["professional-services", "non-profit", "energy-utilities", "media-entertainment"],
  },
];

const byId = new Map(industries.map((ind) => [ind.slug, ind]));

const IndustryCard = ({ ind, delay }: { ind: Industry; delay: number }) => (
  <Reveal delay={delay} variant="scale">
    <Link
      to={`/industries/${ind.slug}`}
      aria-label={`See how we help ${ind.label}`}
      className="group flex items-start gap-3.5 h-full p-4 rounded-2xl border border-border/50 bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
        <ind.icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <span className="text-sm font-semibold text-foreground">{ind.label}</span>
        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{ind.tagline}</p>
      </div>
    </Link>
  </Reveal>
);

const IndustriesIndexSection = () => {
  let cardIndex = 0;

  return (
    <section className="py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Industries We Serve
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Every industry we <span className="heading-accent">build for</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            From regulated finance to field operations — click any industry to see how we help.
          </p>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.slugs.map((slug) => {
                  const ind = byId.get(slug);
                  if (!ind) return null;
                  const delay = (cardIndex++) * 40;
                  return <IndustryCard key={slug} ind={ind} delay={delay} />;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4 text-sm">Don't see your industry? We still want to hear from you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Start the conversation
            <ArrowForwardIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesIndexSection;
