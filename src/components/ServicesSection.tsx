import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import {
  GlobeIcon,
  ColorPaletteIcon,
  ServerIcon,
  FlaskIcon,
  CodeSlashIcon,
  LayersIcon,
  CubeIcon,
  PhonePortraitIcon,
  DesktopIcon,
  SettingsIcon,
  CloudIcon,
  LinkIcon,
  ArrowForwardIcon,
  OpenIcon,
} from "@/components/icons";

const stages = [
  {
    id: "launch",
    number: "01",
    label: "Launch",
    title: "Get your business online",
    summary: "Websites, design, mobile and desktop apps",
    audience: "Best for new businesses and brands that need a credible presence on web, phone or desktop.",
    services: [
      {
        icon: ColorPaletteIcon,
        title: "Web Design",
        description: "User-centred UI/UX and brand identity that makes you look as credible online as in person.",
        tags: ["UI/UX", "Brand identity", "Prototypes"],
        projectType: "Web Development",
      },
      {
        icon: GlobeIcon,
        title: "Web Development",
        description: "Responsive websites, PWAs and online stores, built fast and optimized for search.",
        tags: ["E-commerce", "SEO", "CMS & blog"],
        projectType: "Web Development",
      },
      {
        icon: PhonePortraitIcon,
        title: "Mobile Development",
        description: "iOS and Android apps, native or cross-platform, built to reach customers wherever they are.",
        tags: ["Flutter", "React Native", "App stores"],
        projectType: "Mobile Development",
      },
      {
        icon: DesktopIcon,
        title: "Desktop Apps",
        description: "Windows, macOS and Linux software for teams that work on-site, offline or with special hardware.",
        tags: ["Cross-platform", "Offline-first", "Auto-updates"],
        projectType: "Desktop Application",
      },
    ],
  },
  {
    id: "build",
    number: "02",
    label: "Build",
    title: "Build the product your business runs on",
    summary: "Full-stack systems, SaaS, APIs and testing",
    audience: "Best for companies replacing spreadsheets and manual work with real software, or launching a product of their own.",
    services: [
      {
        icon: LayersIcon,
        title: "Full Stack Development",
        description: "Customer portals, booking systems and marketplaces, built frontend-to-backend as one product.",
        tags: ["Frontend & backend", "Databases", "Auth"],
        projectType: "Web Development",
      },
      {
        icon: CubeIcon,
        title: "SaaS Products",
        description: "End-to-end SaaS platforms with subscription billing and multi-tenant architecture.",
        tags: ["Billing", "Multi-tenant", "Roles"],
        projectType: "SaaS Product",
      },
      {
        icon: CodeSlashIcon,
        title: "API Development",
        description: "Secure, documented APIs that let your apps, partners and customers share data reliably.",
        tags: ["REST & GraphQL", "Docs", "Versioning"],
        projectType: "API / Backend Development",
      },
      {
        icon: FlaskIcon,
        title: "Software Testing",
        description: "Manual and automated QA that catches issues before your users do.",
        tags: ["Automated QA", "Performance", "Security audits"],
        projectType: "Other",
      },
    ],
  },
  {
    id: "run-grow",
    number: "03",
    label: "Run & Grow",
    title: "Keep it running, and make it smarter",
    summary: "Hosting, cloud, integrations and AI",
    audience: "Best for businesses that already have systems and want them reliable, connected and automated.",
    services: [
      {
        icon: ServerIcon,
        title: "Web Hosting",
        description: "Reliable, secure hosting with daily backups and local support, so your site stays up when it matters.",
        tags: ["99.9% uptime", "SSL", "Daily backups"],
        projectType: "Other",
      },
      {
        icon: CloudIcon,
        title: "Cloud & DevOps",
        description: "Cloud migration, CI/CD and infrastructure automation that keep deployments smooth as you grow.",
        tags: ["AWS · Azure · GCP", "CI/CD", "Monitoring"],
        projectType: "Other",
      },
      {
        icon: LinkIcon,
        title: "Integrations",
        description: "Connect payment gateways, CRMs and accounting tools so data flows without re-typing.",
        tags: ["Payments", "CRM & ERP", "Webhooks"],
        projectType: "Integration Services",
      },
      {
        icon: SettingsIcon,
        title: "Automation & AI",
        description: "AI-powered workflows, chatbots and document processing that cut manual work.",
        tags: ["Workflows", "Chatbots", "Document AI"],
        projectType: "Process Automation",
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-28 pb-14 md:pt-32 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="heading-accent">Services</span>
          </h1>
          <p className="text-muted-foreground">
            From your first website to the systems that run your entire business. Everything we do falls into
            three stages: find yours.
          </p>
        </div>

        {/* Stage overview strip */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 md:mb-20">
          {stages.map((stage, i) => (
            <Reveal
              key={stage.id}
              delay={i * 100}
              variant="up"
              className="border border-border rounded-2xl p-5 bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href={`#${stage.id}`}>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  {stage.number} · {stage.label}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-1">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Stage sections */}
        {stages.map((stage, stageIndex) => (
          <div
            key={stage.id}
            id={stage.id}
            className={`scroll-mt-28 md:scroll-mt-32 ${stageIndex === stages.length - 1 ? "mb-16" : "mb-16 md:mb-20"}`}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  {stage.number} · {stage.label}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">{stage.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground md:text-right max-w-xs">{stage.audience}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stage.services.map((service, i) => (
                <Reveal
                  key={service.title}
                  delay={i * 80}
                  variant="up"
                  className="border border-border rounded-2xl p-5 bg-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 shrink-0">
                    <service.icon className="w-5 h-5 text-accent-foreground" />
                  </div>

                  <h3 className="text-base font-semibold mb-1.5">{service.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/contact?project_type=${encodeURIComponent(service.projectType)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all mt-4"
                  >
                    Get started
                    <OpenIcon className="w-4 h-4" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        {/* Closing CTA */}
        <div className="rounded-2xl bg-primary p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-1">
              Not sure which service you need?
            </h3>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              Tell us what you're trying to achieve and we'll recommend the right mix, whether it's one service
              or all three stages.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold hover:bg-white px-5 py-3 rounded-lg transition-all duration-300 text-sm whitespace-nowrap"
            >
              Book a free consultation
              <ArrowForwardIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-5 py-3 rounded-lg transition-all duration-300 text-sm whitespace-nowrap"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
