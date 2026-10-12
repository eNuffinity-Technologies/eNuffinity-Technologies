import { Link, useParams } from "react-router-dom";
import { ArrowForwardIcon, ChevronForwardIcon, CheckmarkCircleIcon, ShieldCheckmarkIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug } from "@/data/industries";
import { usePageMeta } from "@/hooks/use-page-meta";
import NotFound from "@/pages/NotFound";

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  usePageMeta(
    industry ? `${industry.label} Software Development` : undefined,
    industry?.intro,
  );

  if (!industry) {
    return <NotFound />;
  }

  return (
    <>
      {/* Hero banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          {industry.image && (
            <img
              src={industry.image}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: industry.imagePosition ?? "center" }}
              className="w-full h-full object-cover opacity-45 blur-sm scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronForwardIcon className="w-3.5 h-3.5 rotate-180" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <industry.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Industries We Serve
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Software for <span className="heading-accent">{industry.label}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-2">{industry.tagline}</p>
            <p className="text-muted-foreground leading-relaxed">{industry.intro}</p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-14 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Challenges we help you <span className="heading-accent">solve</span>
            </h2>
            <p className="text-muted-foreground">
              The problems that come up again and again when building software for {industry.label.toLowerCase()}.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                <CheckmarkCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we help */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How <span className="heading-accent">eNuffinity</span> helps
            </h2>
            <p className="text-muted-foreground">
              Where our services map directly onto {industry.label.toLowerCase()} needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {industry.solutions.map((solution) => (
              <div key={solution.title} className="border border-border rounded-xl p-6 bg-card">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <solution.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Relevant services */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              Relevant services:
            </span>
            {industry.relevantServices.map((service) => (
              <Link
                key={service}
                to="/services"
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance callout + CTA */}
      <section className="py-14 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-xl p-5 flex items-start gap-3 mb-10">
              <ShieldCheckmarkIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.complianceNote}</p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to talk about your <span className="heading-accent">{industry.label}</span> project?
              </h2>
              <p className="text-muted-foreground mb-6">
                No obligation — just a conversation about what you're trying to build.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start the Conversation
                  <ArrowForwardIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
