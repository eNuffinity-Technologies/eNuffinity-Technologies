import { Link } from "react-router-dom";
import {
  ArrowForwardIcon,
  StarIcon,
  GlobeIcon,
  PhonePortraitIcon,
  DesktopIcon,
  CodeSlashIcon,
  LinkIcon,
  TrendingUpIcon,
  ChevronForwardIcon,
  CheckmarkIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger, PopoverArrow } from "@/components/ui/popover";
import { HeroStoryCycler } from "@/components/HeroStoryCycler";
import type { HeadlineLine } from "@/components/HeroStoryCycler";
import heroBg from "@/assets/hero-bg.jpg";

const headlineLines: HeadlineLine[] = [
  [
    { text: "Where Ideas Become " },
    { text: "Scalable Reality", accent: true },
    { break: true },
    { text: "Through Intelligent Software" },
  ],
  [
    { text: "Practical Software " },
    { text: "Built To Scale", accent: true },
    { break: true },
    { text: "For Startups & Growing Teams" },
  ],
  [
    { text: "From Idea To Launch " },
    { text: "One Trusted Partner", accent: true },
    { break: true },
    { text: "Across Your Entire Tech Stack" },
  ],
  [
    { text: "Secure By Design " },
    { text: "Compliant By Default", accent: true },
    { break: true },
    { text: "Built For Regulated Industries" },
  ],
  [
    { text: "Web, Mobile & Cloud " },
    { text: "Under One Roof", accent: true },
    { break: true },
    { text: "Built For African Businesses" },
  ],
];

const quickProps = [
  {
    icon: GlobeIcon,
    label: "Web Dev",
    tagline: "Fast, modern websites built to convert visitors into customers.",
    services: [
      "Custom Website Development",
      "E-Commerce & Online Stores",
      "Progressive Web Apps (PWAs)",
      "CMS Integration & Blogs",
      "SEO-Optimized Architecture",
    ],
  },
  {
    icon: PhonePortraitIcon,
    label: "Mobile Dev",
    tagline: "Native and cross-platform apps that feel right at home.",
    services: [
      "iOS & Android Native Apps",
      "Cross-Platform (Flutter & React Native)",
      "App Store & Play Store Deployment",
      "Push Notifications & Offline Sync",
      "In-App Payments & Analytics",
    ],
  },
  {
    icon: DesktopIcon,
    label: "Desktop Apps",
    tagline: "Powerful tools for Windows, macOS, and Linux.",
    services: [
      "Windows & macOS Applications",
      "Cross-Platform (Electron / .NET MAUI)",
      "Offline-First Local Databases",
      "Auto-Update & Licensing Systems",
      "Enterprise Internal Tools",
    ],
  },
  {
    icon: CodeSlashIcon,
    label: "API Development",
    tagline: "Secure, well-documented APIs that scale with you.",
    services: [
      "REST & GraphQL API Design",
      "Authentication & Authorization",
      "Database Design & Optimization",
      "Third-Party API Integrations",
      "API Documentation & Testing",
    ],
  },
  {
    icon: LinkIcon,
    label: "Integrations",
    tagline: "Connect the tools your business already runs on.",
    services: [
      "Payment Gateway Integration",
      "CRM & ERP Connections",
      "Cloud & DevOps Automation",
      "Webhook & Event-Driven Systems",
      "AI & Workflow Automation",
    ],
  },
  {
    icon: TrendingUpIcon,
    label: "Scalable Solutions",
    tagline: "Architecture that grows with your business, not against it.",
    services: [
      "SaaS & Multi-Tenant Platforms",
      "Full Stack Development",
      "Cloud Infrastructure & Scaling",
      "Automated Testing & QA",
      "Performance Monitoring",
    ],
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 blur-xl floating" />
      <div className="absolute bottom-1/4 right-6 md:right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 blur-xl floating-delayed" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 blur-lg floating-slow" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8 animate-fade-in">
            <StarIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Powering Ambitious Ideas Across South Africa & Beyond
            </span>
          </div>

          {/* Main Heading — cycles through a few short lines telling the story */}
          <div
            className="flex items-center justify-center mb-6 min-h-[7.5rem] sm:min-h-[10rem] md:min-h-[12.5rem] lg:min-h-[15rem] animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <HeroStoryCycler
              as="h1"
              lines={headlineLines}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
            />
          </div>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in px-4 sm:px-0"
            style={{ animationDelay: "0.2s" }}
          >
            We don’t just build software — we engineer digital ecosystems that
            grow with your business. From powerful applications to secure
            integrations, we turn complexity into seamless, scalable solutions
            built for the future.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore What We Build
                <ArrowForwardIcon className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Quick Value Props — click for a category's services */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-12 md:mt-16 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            {quickProps.map((prop) => (
              <Popover key={prop.label}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="group relative w-full min-h-[6.5rem] glass rounded-xl p-3 pt-4 pb-6 flex flex-col items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-[1.08] hover:-translate-y-1 hover:bg-secondary/40 hover:shadow-xl hover:shadow-primary/10 data-[state=open]:scale-[1.08] data-[state=open]:-translate-y-1 data-[state=open]:bg-secondary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <prop.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-medium text-muted-foreground text-center">
                      {prop.label}
                    </span>
                    <ChevronForwardIcon
                      className="w-3.5 h-3.5 rotate-90 text-accent absolute bottom-1.5 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0.5 group-data-[state=open]:opacity-100 group-data-[state=open]:translate-y-0.5"
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  sideOffset={14}
                  className="w-[min(22rem,calc(100vw-2rem))] p-0 overflow-hidden border-border/60 shadow-2xl shadow-primary/10"
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-accent" />

                  <div className="relative p-5 overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none" />

                    <div className="relative z-10 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                          <prop.icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <p className="text-sm font-bold text-foreground">{prop.label}</p>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {prop.tagline}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {prop.services.map((service) => (
                          <li key={service} className="flex items-center gap-2.5 text-sm text-foreground">
                            <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                              <CheckmarkIcon className="w-3 h-3 text-accent" />
                            </span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/services"
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Explore All Services
                        <ArrowForwardIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
