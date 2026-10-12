import { LocateIcon, RibbonIcon } from "@/components/icons";

const AnimatedBrandVisual = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square">
    {/* Outer pulse ring */}
    <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-[pulse-glow_3s_ease-in-out_infinite]" />
    <div className="absolute inset-8 rounded-full bg-accent/10 blur-2xl animate-[pulse-glow_3s_ease-in-out_infinite_1.5s]" />

    {/* Rotating dashed orbits */}
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="200"
        cy="200"
        r="170"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="1"
        strokeDasharray="4 8"
        style={{ transformOrigin: "center", animation: "spin 40s linear infinite" }}
      />
      <circle
        cx="200"
        cy="200"
        r="135"
        stroke="hsl(var(--accent) / 0.25)"
        strokeWidth="1"
        strokeDasharray="3 10"
        style={{ transformOrigin: "center", animation: "spin 30s linear infinite reverse" }}
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        strokeDasharray="2 6"
        style={{ transformOrigin: "center", animation: "spin 20s linear infinite" }}
      />

      {/* Infinity symbol — centerpiece */}
      <g transform="translate(200 200) scale(3.5) translate(-24 -24)">
        <path
          d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Pulsing glow on infinity */}
        <path
          d="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" />
        </path>
        <path
          d="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0"
        >
          <animate attributeName="opacity" values="0;0.4;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </path>

        {/* Orbiting particles along the infinity path */}
        <circle r="1.2" fill="hsl(var(--primary))">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M14 24c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3L28 24l-2.8 3c-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
          />
        </circle>
        <circle r="1.2" fill="hsl(var(--accent))">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M34 24c0 3.3-2.7 6-6 6-2.2 0-4.1-1.2-5.2-3L20 24l2.8-3c1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6z"
          />
        </circle>
      </g>

      {/* Floating tech node badges around the orbit */}
      {[
        { x: 200, y: 30, label: "API" },
        { x: 370, y: 200, label: "SaaS" },
        { x: 200, y: 370, label: "Cloud" },
        { x: 30, y: 200, label: "Apps" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="22" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fill="hsl(var(--primary))"
            fontWeight="600"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>

    {/* Floating glass badge */}
    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-3 flex items-center gap-3 whitespace-nowrap">
      <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
        <RibbonIcon className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold text-foreground">Founded 2024 · Johannesburg</p>
        <p className="text-[10px] text-muted-foreground">Engineered for global scale</p>
      </div>
    </div>
  </div>
);

const WhoWeAreSection = () => {
  return (
    <section className="pt-28 pb-14 md:pt-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="heading-accent">eNuffinity Technologies</span>
          </h1>
          <p className="text-muted-foreground">
            A forward-thinking software company born in Johannesburg, building secure
            and scalable digital solutions for businesses worldwide.
          </p>
        </div>

        {/* Animated Brand Visual + Story */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Animated visual (replaces the large photo) */}
          <div className="order-2 lg:order-1">
            <AnimatedBrandVisual />
          </div>

          {/* Story */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
              Building the future of <span className="heading-accent">software</span>, one solution at a time.
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded by{" "}
              <span className="text-foreground font-medium">Sanele Sithole</span>,
              eNuffinity Technologies (PTY) LTD was born from a vision of infinite technological
              possibilities. What started as a passion for building impactful software has
              grown into a forward-thinking company transforming businesses across South
              Africa and globally.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              We help companies and individuals strengthen their commercial presence,
              modernise legacy systems, and collaborate with major service providers through
              seamless, native integrations — built on the partner's own tech stack so the
              experience feels like one connected platform. From a first website to the
              systems that run your entire business, our work falls into three stages:
              Launch, Build, and Run &amp; Grow.
            </p>

            {/* Snapshot stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-xl bg-card border border-border/50">
                <p className="text-xl md:text-2xl font-bold text-primary">16+</p>
                <p className="text-xs text-muted-foreground">Industries served</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-card border border-border/50">
                <p className="text-xl md:text-2xl font-bold text-primary">3</p>
                <p className="text-xs text-muted-foreground">Stages: Launch, Build, Run &amp; Grow</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-card border border-border/50">
                <p className="text-xl md:text-2xl font-bold text-primary">POPIA</p>
                <p className="text-xs text-muted-foreground">&amp; GDPR-aligned by default</p>
              </div>
            </div>

            {/* Mission */}
            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <LocateIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-muted-foreground">
                  <span className="text-foreground font-semibold not-italic">Our Mission: </span>
                  "Empowering businesses with limitless, secure, and integrated software solutions that drive effortless growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
