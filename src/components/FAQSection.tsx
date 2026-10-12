import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronForwardIcon,
  ShieldIcon,
  TimeIcon,
  CodeSlashIcon,
  DocumentTextIcon,
  HeadsetIcon,
  GlobeIcon,
  CashIcon,
  LayersIcon,
  ChatbubbleIcon,
} from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    question: "What pricing models do you offer?",
    answer: "We offer from-price packages for each project type — Basic, Standard, and Premium — so you know the starting cost upfront, plus optional monthly Care Plans for ongoing support once you're live. Complex or custom requirements are quoted after a discovery call.",
    icon: CashIcon,
    category: "Business",
  },
  {
    question: "How do you handle data privacy in integrations?",
    answer: "Security is at our core. All integrations use encrypted connections (TLS/SSL), we follow POPIA and GDPR compliance standards, and sensitive data like KYC/AML information is handled with strict access controls and audit trails.",
    icon: ShieldIcon,
    category: "Security",
  },
  {
    question: "What's your approach to third-party API reliability?",
    answer: "We implement retry mechanisms, circuit breakers, and fallback strategies for all third-party integrations. We also set up monitoring and alerting so issues are caught and resolved before they impact your users.",
    icon: LayersIcon,
    category: "Technical",
  },
  {
    question: "What is the typical project timeline?",
    answer: "Timelines vary by complexity: a standard website takes 2-4 weeks, web applications 4-8 weeks, and enterprise software or mobile apps 8-16+ weeks. We provide a detailed timeline during our discovery phase.",
    icon: TimeIcon,
    category: "Process",
  },
  {
    question: "Do you offer NDA and confidentiality agreements?",
    answer: "Absolutely. We're happy to sign NDAs before any project discussions. Protecting your intellectual property and business information is a priority.",
    icon: DocumentTextIcon,
    category: "Legal",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer: "Yes! We're experienced with a wide range of technologies and can integrate with or extend your existing systems. We'll assess your current stack and recommend the best approach for your goals.",
    icon: CodeSlashIcon,
    category: "Technical",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes — every package includes 30 days to 3 months of post-launch bug-fix support depending on tier. After that, our monthly Care Plans (Basic, Growth, or Premium) cover ongoing updates, monitoring, and priority support.",
    icon: HeadsetIcon,
    category: "Support",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across 16+ industries — from regulated sectors like fintech, healthcare, insurance, and forensic services, to commerce and operations like e-commerce, retail, logistics, manufacturing, and agriculture, plus real estate, construction, education, hospitality, and more. See our Industries page for the full list.",
    icon: GlobeIcon,
    category: "Business",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const header = useScrollReveal(0.2);
  const cards = useScrollReveal(0.1);
  const cta = useScrollReveal(0.2);

  const visibleFaqs = useMemo(
    () => (activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory)),
    [activeCategory],
  );

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <section id="faq" className="pt-28 pb-14 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ease-out ${
            header.isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-[4px]"
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-3 block">
            // FAQ
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ lineHeight: '1.1' }}>
            Questions we get
            <br />
            <span className="heading-accent">asked the most</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse by topic, or ask us something we haven't covered yet.
          </p>
        </div>

        {/* Category filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => {
            const count = category === "All" ? faqs.length : faqs.filter((f) => f.category === category).length;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectCategory(category)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
                <span className={`text-xs ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/70"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ cards */}
        <div
          ref={cards.ref}
          key={activeCategory}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visibleFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const Icon = faq.icon;

            return (
              <button
                key={faq.question}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={`group text-left rounded-2xl p-6 transition-all duration-500 ease-out relative overflow-hidden ${
                  isOpen
                    ? "bg-card ring-1 ring-primary/30 shadow-lg shadow-primary/5"
                    : "bg-card/50 hover:bg-card ring-1 ring-border/50 hover:ring-border"
                } ${
                  cards.isVisible
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-6 blur-[4px]"
                }`}
                style={{
                  willChange: "transform, opacity, filter",
                  transitionDelay: cards.isVisible ? `${index * 80 + 100}ms` : "0ms",
                }}
              >
                {isOpen && (
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {faq.category}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ChevronForwardIcon
                      className={`w-4 h-4 mt-1 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3
                      className={`font-semibold transition-colors duration-300 ${
                        isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-7 border-l-2 border-primary/30 ml-[1px]">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          ref={cta.ref}
          className={`mt-14 transition-all duration-700 ease-out ${
            cta.isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-[4px]"
          }`}
          style={{ transitionDelay: cta.isVisible ? "200ms" : "0ms" }}
        >
          <div className="border border-border rounded-2xl bg-card/80 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <ChatbubbleIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Still have questions?</h3>
                <p className="text-muted-foreground text-sm">
                  We'd love to hear from you — no obligation, just a conversation.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-100 transition-all duration-300 text-sm"
            >
              Get in Touch
              <ChevronForwardIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
