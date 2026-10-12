import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/industries";
import { ArrowForwardIcon } from "@/components/icons";

const IndustriesSection = () => {
  const featured = industries.filter((ind) => ind.featured);
  const moreCount = industries.length - featured.length;

  return (
    <section className="py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Industries We Serve
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Industries we <span className="heading-accent">serve</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Trusted across regulated and high-growth sectors — click an industry to see how we help.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((ind, i) => (
            <Reveal
              key={ind.slug}
              delay={i * 60}
              variant="scale"
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/industries/${ind.slug}`} aria-label={`See how we help ${ind.label}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={`${ind.label} industry illustration`}
                    loading="lazy"
                    width={768}
                    height={512}
                    style={{ objectPosition: ind.imagePosition ?? "center" }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-[1.05] contrast-[1.02]"
                  />
                  {/* Dual overlay: bottom fade for label legibility + tint that matches both themes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-border/40 group-hover:ring-primary/40 transition-colors rounded-2xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                    <ind.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground drop-shadow-sm">{ind.label}</span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal
            delay={featured.length * 60}
            variant="scale"
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            <Link
              to="/industries"
              aria-label="View all industries we serve"
              className="flex flex-col items-center justify-center text-center gap-2 aspect-[4/3] p-4 bg-gradient-to-br from-secondary/40 to-secondary/10"
            >
              <span className="text-2xl font-bold text-primary">+{moreCount}</span>
              <span className="text-sm font-semibold text-foreground">More industries</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                View all
                <ArrowForwardIcon className="w-3 h-3" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
