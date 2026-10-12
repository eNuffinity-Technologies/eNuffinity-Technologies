import type { ComponentType, SVGProps } from "react";
import {
  CashIcon,
  HeartIcon,
  CartIcon,
  CubeIcon,
  SchoolIcon,
  HomeIcon,
  BriefcaseIcon,
  ConstructIcon,
  ShieldCheckmarkIcon,
  LayersIcon,
  CloudIcon,
  PeopleIcon,
  TimeIcon,
  SettingsIcon,
  GitBranchIcon,
  GlobeIcon,
  ServerIcon,
  PhonePortraitIcon,
  StorefrontIcon,
  BuildIcon,
  LeafIcon,
  BedIcon,
  RibbonIcon,
  ShieldIcon,
  FlashIcon,
  FilmIcon,
  HardwareChipIcon,
  CalendarIcon,
  TrendingUpIcon,
  DocumentTextIcon,
  SearchIcon,
} from "@/components/icons";
import industryFintech from "@/assets/industry-fintech.avif";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";
import industryConstruction from "@/assets/industry-construction.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryAgriculture from "@/assets/industry-agriculture.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import industryHospitality from "@/assets/industry-hospitality.jpg";
import industryNonprofit from "@/assets/industry-nonprofit.jpg";
import industryInsurance from "@/assets/industry-insurance.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryMedia from "@/assets/industry-media.jpg";
import industryForensic from "@/assets/industry-forensic.jpg";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Industry = {
  slug: string;
  label: string;
  icon: Icon;
  /** Featured industries appear on the homepage grid; the rest only show on the full /industries index and their own detail page. */
  featured?: boolean;
  image?: string;
  imagePosition?: string;
  tagline: string;
  intro: string;
  challenges: string[];
  solutions: { icon: Icon; title: string; description: string }[];
  complianceNote: string;
  relevantServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    label: "Fintech & Banking",
    icon: CashIcon,
    featured: true,
    image: industryFintech,
    tagline: "Secure, auditable software for regulated financial products.",
    intro:
      "From digital banking portals to lending platforms, fintech products live or die on trust — every transaction needs to be fast, accurate, and defensible in an audit. We build the backend rigor and the polished front-end that regulated financial products demand.",
    challenges: [
      "Integrating securely with payment gateways, credit bureaus, and KYC/AML verification providers",
      "Giving customers real-time visibility into transactions, balances, and statements",
      "Producing clean audit trails for regulators and internal compliance teams",
      "Modernising legacy core-banking systems without disrupting live operations",
    ],
    solutions: [
      {
        icon: ShieldCheckmarkIcon,
        title: "Compliance-first architecture",
        description: "Encrypted data at rest and in transit, role-based access control, and audit logging built in from day one — not bolted on after a review.",
      },
      {
        icon: LayersIcon,
        title: "Secure API integrations",
        description: "Native integrations with payment processors, KYC/AML providers, and credit bureaus, with retry logic and monitoring for financial-grade reliability.",
      },
      {
        icon: PeopleIcon,
        title: "Client-facing portals",
        description: "Web and mobile experiences for account holders — statements, transfers, and support — built on the same secure backend as your internal tools.",
      },
    ],
    complianceNote:
      "We design with POPIA in mind for all personal and financial data, and structure integrations to align with the access-control and record-keeping expectations of South African financial regulation.",
    relevantServices: ["API & Backend Development", "Custom Software Development", "Cloud & DevOps", "Web Development"],
  },
  {
    slug: "healthcare",
    label: "Healthcare & Medical Practices",
    icon: HeartIcon,
    featured: true,
    image: industryHealthcare,
    tagline: "Patient-centred systems that protect sensitive health data.",
    intro:
      "Healthcare software has to do two things at once: make care easier to deliver, and treat patient information as the sensitive data it legally is. We build booking systems, patient portals, and clinical admin tools with that balance built in from the first line of code.",
    challenges: [
      "Handling patient records and health information as special personal information under POPIA",
      "Connecting appointment, billing, and clinical systems that were never designed to talk to each other",
      "Giving patients a simple, secure way to book, pay, and communicate",
      "Keeping practice or clinic admin running smoothly as patient volume grows",
    ],
    solutions: [
      {
        icon: ShieldCheckmarkIcon,
        title: "Secure records handling",
        description: "Encrypted storage, strict access controls, and audit trails for any system that touches patient data.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Patient engagement tools",
        description: "Booking, reminders, and secure messaging that reduce no-shows and admin overhead.",
      },
      {
        icon: GitBranchIcon,
        title: "System interoperability",
        description: "Integrations between booking, billing, and clinical software so staff aren't re-entering the same data three times.",
      },
    ],
    complianceNote:
      "Health data is treated as special personal information under POPIA. We build access controls, consent handling, and encryption to match that heightened standard, not just general best practice.",
    relevantServices: ["Custom Software Development", "Web Development", "API & Backend Development", "Cloud & DevOps"],
  },
  {
    slug: "ecommerce",
    label: "E-commerce",
    icon: CartIcon,
    featured: true,
    image: industryEcommerce,
    imagePosition: "center 85%",
    tagline: "Storefronts and platforms built to convert and scale.",
    intro:
      "An online store is judged in seconds — slow pages, clunky checkout, or a site that falls over during a sale all cost you revenue directly. We build e-commerce platforms that load fast, convert well, and stay up when traffic spikes.",
    challenges: [
      "Reducing cart abandonment with a fast, trustworthy checkout experience",
      "Integrating payment gateways, couriers, and inventory systems without manual reconciliation",
      "Handling traffic spikes during promotions without downtime",
      "Keeping customer and payment data handled responsibly",
    ],
    solutions: [
      {
        icon: GlobeIcon,
        title: "High-converting storefronts",
        description: "Fast, mobile-first web experiences with SEO foundations built in, not bolted on afterward.",
      },
      {
        icon: CloudIcon,
        title: "Scalable infrastructure",
        description: "Cloud hosting and CI/CD pipelines that keep the store online and responsive during your busiest sales.",
      },
      {
        icon: GitBranchIcon,
        title: "Payment & logistics integrations",
        description: "Native connections to payment gateways, couriers, and inventory systems so orders flow automatically.",
      },
    ],
    complianceNote:
      "We handle customer and payment data in line with POPIA, and structure checkout and payment integrations around recognised payment-security practices rather than storing sensitive card data ourselves.",
    relevantServices: ["Web Development", "Cloud & DevOps", "SaaS Products", "API & Backend Development"],
  },
  {
    slug: "logistics",
    label: "Logistics",
    icon: CubeIcon,
    tagline: "Visibility and automation across the supply chain.",
    intro:
      "Logistics runs on timing — a shipment update that's an hour late is as good as no update at all. We build the tracking, routing, and notification systems that keep fleets, warehouses, and customers in sync in real time.",
    challenges: [
      "Giving customers and internal teams accurate, real-time shipment tracking",
      "Coordinating fleet and warehouse systems that grew up as separate spreadsheets and tools",
      "Automating customer notifications without a developer manually wiring each one",
      "Scaling operations without a proportional increase in admin headcount",
    ],
    solutions: [
      {
        icon: TimeIcon,
        title: "Real-time tracking",
        description: "Shipment and fleet dashboards that give ops teams and customers the same accurate picture, live.",
      },
      {
        icon: SettingsIcon,
        title: "Process automation",
        description: "Automated notifications, document handling, and status updates that remove manual admin work.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Driver & warehouse apps",
        description: "Mobile tools for drivers and warehouse staff that feed the same central system in real time.",
      },
    ],
    complianceNote:
      "Where shipments cross borders or involve customer data, we design data handling and retention to align with POPIA and the data-protection expectations of the destination markets you operate in.",
    relevantServices: ["Custom Software Development", "API & Backend Development", "Mobile Development", "Cloud & DevOps"],
  },
  {
    slug: "education",
    label: "Education",
    icon: SchoolIcon,
    tagline: "Learning platforms and admin systems built for growth.",
    intro:
      "Schools, training providers, and edtech products all face the same challenge: making learning accessible while keeping learner data — much of it belonging to minors — properly protected. We build platforms that do both.",
    challenges: [
      "Protecting learner data, including information belonging to minors, to a high standard",
      "Supporting remote, hybrid, and in-person learning from one platform",
      "Automating admissions, enrolment, and admin workflows that eat staff time",
      "Making systems genuinely accessible and easy to use for non-technical staff and learners",
    ],
    solutions: [
      {
        icon: PeopleIcon,
        title: "Learner & parent portals",
        description: "Secure, easy-to-use portals for enrolment, progress tracking, and communication.",
      },
      {
        icon: SettingsIcon,
        title: "Admin automation",
        description: "Automated admissions, scheduling, and reporting workflows that free up staff time.",
      },
      {
        icon: ShieldCheckmarkIcon,
        title: "Responsible data handling",
        description: "Access controls and encryption designed around the heightened care learner and minor data requires.",
      },
    ],
    complianceNote:
      "We treat learner data — particularly information relating to minors — with a higher standard of care under POPIA, with tighter access controls and clear consent handling for guardians.",
    relevantServices: ["Custom Software Development", "Web Development", "Cloud & DevOps", "SaaS Products"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    icon: HomeIcon,
    tagline: "Listing platforms and CRM built for agents and agencies.",
    intro:
      "Property is sold on presentation and speed of response. We build listing platforms, lead-capture tools, and CRM systems that help agencies present well online and follow up on leads before a competitor does.",
    challenges: [
      "Presenting listings well across web and mobile, with fast search and filtering",
      "Capturing and following up on leads before they go cold",
      "Managing agent pipelines, documents, and client communication in one place",
      "Handling buyer and seller personal information responsibly through the transaction",
    ],
    solutions: [
      {
        icon: GlobeIcon,
        title: "Listing platforms",
        description: "Fast, searchable property websites and portals built to convert browsers into enquiries.",
      },
      {
        icon: ServerIcon,
        title: "CRM & pipeline tools",
        description: "Custom CRM systems that track leads, listings, and documents in one connected view for agents.",
      },
      {
        icon: GitBranchIcon,
        title: "Third-party integrations",
        description: "Integrations with listing portals, payment, and document/e-signature tools to remove manual re-entry.",
      },
    ],
    complianceNote:
      "Property transactions involve sensitive personal and financial information from both buyers and sellers — we handle this in line with POPIA, with clear access controls across agent teams.",
    relevantServices: ["Web Development", "CRM & Business Systems", "API & Backend Development", "SaaS Products"],
  },
  {
    slug: "professional-services",
    label: "Professional Services (Accounting, Law, & Local Consultancies)",
    icon: BriefcaseIcon,
    tagline: "Client portals and back-office systems for firms that bill on trust.",
    intro:
      "Consultancies, agencies, and professional firms sell expertise and discretion. We build the client portals, billing systems, and document workflows that let you look as professional online as you are in the room — while keeping client information confidential.",
    challenges: [
      "Presenting a credible, brand-aligned web presence that reflects the quality of the work",
      "Managing client documents, billing, and time-tracking without spreadsheets everywhere",
      "Keeping client information confidential across a growing team",
      "Automating recurring admin so billable time isn't lost to paperwork",
    ],
    solutions: [
      {
        icon: GlobeIcon,
        title: "Brand-aligned web presence",
        description: "Websites and portals that reflect the credibility of the firm and make it easy for clients to engage.",
      },
      {
        icon: ServerIcon,
        title: "Client & billing systems",
        description: "Custom CRM, billing, and time-tracking tools tailored to how your firm actually works.",
      },
      {
        icon: SettingsIcon,
        title: "Workflow automation",
        description: "Automated document handling and notifications that cut down on manual, repetitive admin.",
      },
    ],
    complianceNote:
      "We build under NDA as standard, and design client data handling — documents, communications, billing — around confidentiality and POPIA compliance from the outset.",
    relevantServices: ["Web Design", "CRM & Business Systems", "Custom Software Development", "Process Automation"],
  },
  {
    slug: "construction",
    label: "Construction",
    icon: ConstructIcon,
    featured: true,
    image: industryConstruction,
    tagline: "Project, site, and supply-chain software built for contractors and builders.",
    intro:
      "Construction projects run on tight margins and tighter deadlines — a delay on one site ripples into cost overruns everywhere else. We build the project management, site reporting, and supplier integration tools that keep contractors, subcontractors, and clients working from the same numbers.",
    challenges: [
      "Tracking budgets, timelines, and materials across multiple active sites",
      "Coordinating subcontractors, suppliers, and site teams without constant phone calls",
      "Keeping safety, progress, and compliance documentation organised and accessible",
      "Giving clients clear, real-time visibility into project progress",
    ],
    solutions: [
      {
        icon: ServerIcon,
        title: "Site & project dashboards",
        description: "Custom dashboards that track budgets, timelines, and materials across every active site in one place.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Mobile site apps",
        description: "Field apps for progress photos, checklists, and timesheets that sync straight back to the office.",
      },
      {
        icon: GitBranchIcon,
        title: "Supplier & accounting integrations",
        description: "Connect procurement, accounting, and supplier systems so data flows without manual re-entry.",
      },
    ],
    complianceNote:
      "We handle project, client, and employee data in line with POPIA, and build reporting tools that make it easier to keep the safety and compliance documentation your sites already require organised and accessible.",
    relevantServices: ["Custom Software Development", "Mobile Development", "API & Backend Development", "Cloud & DevOps"],
  },
  {
    slug: "retail",
    label: "Retail, Wholesale, & Distribution",
    icon: StorefrontIcon,
    featured: true,
    image: industryRetail,
    tagline: "Point-of-sale, inventory, and omnichannel systems for stores that sell everywhere.",
    intro:
      "Retail today spans in-store POS, online storefronts, and marketplace listings — all needing to show the same stock numbers. We build the POS integrations, inventory systems, and omnichannel tools that keep in-store and online retail in sync.",
    challenges: [
      "Keeping stock levels accurate and in sync across store, warehouse, and online channels",
      "Connecting POS, inventory, and online storefronts that run on different systems",
      "Giving store and head-office teams real-time sales and stock visibility",
      "Running loyalty programmes and promotions without manual spreadsheet work",
    ],
    solutions: [
      {
        icon: CloudIcon,
        title: "Omnichannel inventory",
        description: "Real-time stock sync across POS, warehouse, and online storefronts so every channel sells from the same numbers.",
      },
      {
        icon: ServerIcon,
        title: "POS & back-office integrations",
        description: "Connect point-of-sale, accounting, and supplier systems so sales data flows automatically, with no manual reconciliation.",
      },
      {
        icon: PeopleIcon,
        title: "Loyalty & customer tools",
        description: "Loyalty programmes and customer data tools that turn repeat shoppers into your most valuable channel.",
      },
    ],
    complianceNote:
      "We handle customer and loyalty-programme data in line with POPIA, and structure POS and payment integrations around recognised payment-security practices.",
    relevantServices: ["Web Development", "SaaS Products", "API & Backend Development", "CRM & Business Systems"],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing & Supply Chain",
    icon: BuildIcon,
    featured: true,
    image: industryManufacturing,
    tagline: "Production tracking and supply-chain software for manufacturers.",
    intro:
      "Manufacturing margins are won or lost on the shop floor — a line that's idle, a part that's out of stock, or a report that's a day late all cost real money. We build the production tracking, inventory, and reporting tools that keep plants running on current, accurate data.",
    challenges: [
      "Tracking production output, downtime, and quality issues across shifts and lines",
      "Keeping raw material and finished-goods inventory accurate in real time",
      "Connecting shop-floor systems with accounting, procurement, and supplier platforms",
      "Giving management accurate, up-to-date reporting without manual spreadsheets",
    ],
    solutions: [
      {
        icon: HardwareChipIcon,
        title: "Production dashboards",
        description: "Real-time dashboards for output, downtime, and quality across every line and shift.",
      },
      {
        icon: CubeIcon,
        title: "Inventory & supply-chain systems",
        description: "Track raw materials and finished goods accurately, with automatic reorder and supplier integration.",
      },
      {
        icon: GitBranchIcon,
        title: "ERP & accounting integrations",
        description: "Connect shop-floor systems with accounting and procurement platforms so data flows without re-entry.",
      },
    ],
    complianceNote:
      "We handle production, supplier, and employee data in line with POPIA, and design reporting systems that make compliance and quality documentation easy to keep organised.",
    relevantServices: ["Custom Software Development", "API & Backend Development", "Cloud & DevOps", "Process Automation"],
  },
  {
    slug: "agriculture",
    label: "Agriculture & AgriTech",
    icon: LeafIcon,
    featured: true,
    image: industryAgriculture,
    tagline: "Farm management and supply-chain visibility from field to market.",
    intro:
      "Agriculture runs on conditions that change daily — weather, yields, and market prices all move faster than a spreadsheet can track. We build the farm management, traceability, and supply-chain tools that give producers and agribusinesses a clear, current picture of their operation.",
    challenges: [
      "Tracking yields, input costs, and resources across multiple farms or fields",
      "Giving buyers and regulators traceability from field to final product",
      "Coordinating harvest, storage, and logistics without constant manual check-ins",
      "Making field data usable for office and management teams without added admin",
    ],
    solutions: [
      {
        icon: ServerIcon,
        title: "Farm management dashboards",
        description: "Dashboards that track yields, inputs, and costs across every field or farm in one place.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Field data apps",
        description: "Mobile tools for field teams to log conditions, activities, and harvest data that sync straight to the office.",
      },
      {
        icon: GitBranchIcon,
        title: "Traceability & supply-chain integration",
        description: "Connect production data with logistics, storage, and buyer systems for end-to-end traceability.",
      },
    ],
    complianceNote:
      "We handle farm, supplier, and employee data in line with POPIA, and build traceability tools that help meet the record-keeping buyers and export markets increasingly require.",
    relevantServices: ["Custom Software Development", "Mobile Development", "API & Backend Development", "Cloud & DevOps"],
  },
  {
    slug: "hospitality",
    label: "Hospitality & Tourism",
    icon: BedIcon,
    image: industryHospitality,
    tagline: "Booking, guest, and operations systems for hotels, lodges, and tour operators.",
    intro:
      "Hospitality is won on first impressions and lost on a booking system that double-books a room. We build booking engines, guest management, and operations tools that keep reservations, staff, and guests all working from the same calendar.",
    challenges: [
      "Avoiding double-bookings across direct, OTA, and walk-in reservations",
      "Giving guests a smooth booking and check-in experience across web and mobile",
      "Coordinating housekeeping, maintenance, and front-desk teams in real time",
      "Managing seasonal demand and pricing without constant manual adjustment",
    ],
    solutions: [
      {
        icon: CalendarIcon,
        title: "Booking engines",
        description: "Direct booking systems that sync with OTAs and channel managers to stop double-bookings before they happen.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Guest & staff apps",
        description: "Mobile tools for check-in, housekeeping, and guest requests that keep every team on the same page.",
      },
      {
        icon: TrendingUpIcon,
        title: "Demand & pricing tools",
        description: "Reporting and pricing tools that help you respond to seasonal demand without guesswork.",
      },
    ],
    complianceNote:
      "We handle guest personal information in line with POPIA, with clear consent and retention practices across booking, payment, and marketing systems.",
    relevantServices: ["Web Development", "Mobile Development", "SaaS Products", "API & Backend Development"],
  },
  {
    slug: "non-profit",
    label: "Non-Profit & NGOs",
    icon: RibbonIcon,
    image: industryNonprofit,
    tagline: "Donor, grant, and programme management software for organisations that run on trust.",
    intro:
      "Non-profits are judged on impact and transparency — donors and funders want to see exactly where their contribution went. We build the donor management, grant reporting, and programme tracking tools that make that transparency straightforward instead of a quarterly scramble.",
    challenges: [
      "Tracking donations, donors, and campaigns without scattered spreadsheets",
      "Producing clear, accurate reporting for funders and grant bodies",
      "Coordinating volunteers, programmes, and beneficiaries across sites",
      "Keeping donor and beneficiary data secure on a limited budget",
    ],
    solutions: [
      {
        icon: ServerIcon,
        title: "Donor & campaign management",
        description: "Custom CRM tools that track donors, donations, and campaigns in one connected view.",
      },
      {
        icon: DocumentTextIcon,
        title: "Grant & impact reporting",
        description: "Reporting tools that turn programme data into the clear, fundable reports funders expect.",
      },
      {
        icon: PeopleIcon,
        title: "Volunteer & programme coordination",
        description: "Portals and tools that make it easy to coordinate volunteers and track programme delivery.",
      },
    ],
    complianceNote:
      "We handle donor and beneficiary data in line with POPIA, with access controls and reporting designed around the transparency funders and regulators expect from non-profits.",
    relevantServices: ["Web Design", "CRM & Business Systems", "Custom Software Development", "SaaS Products"],
  },
  {
    slug: "insurance",
    label: "Insurance",
    icon: ShieldIcon,
    image: industryInsurance,
    tagline: "Claims, policy, and client portals for a business built on trust.",
    intro:
      "Insurance runs on paperwork turned into decisions — a claim has to move from submission to payout accurately and fast, or trust erodes. We build the claims, policy administration, and client portal systems that keep that process fast without cutting corners on compliance.",
    challenges: [
      "Processing claims accurately and quickly across multiple product lines",
      "Giving policyholders self-service access to policies, claims, and documents",
      "Integrating with underwriters, reinsurers, and third-party assessors",
      "Producing clean audit trails for regulators and internal compliance",
    ],
    solutions: [
      {
        icon: ShieldCheckmarkIcon,
        title: "Claims & policy platforms",
        description: "Systems that move claims from submission to decision with built-in audit trails at every step.",
      },
      {
        icon: PeopleIcon,
        title: "Client self-service portals",
        description: "Portals where policyholders can view policies, submit claims, and track status without a phone call.",
      },
      {
        icon: GitBranchIcon,
        title: "Underwriter & assessor integrations",
        description: "Integrations with underwriters, reinsurers, and assessors that remove manual document handling.",
      },
    ],
    complianceNote:
      "We design with POPIA and the record-keeping expectations of South African insurance regulation in mind, with encryption and access controls built in from day one.",
    relevantServices: ["Custom Software Development", "API & Backend Development", "Cloud & DevOps", "Web Development"],
  },
  {
    slug: "energy-utilities",
    label: "Energy & Utilities",
    icon: FlashIcon,
    image: industryEnergy,
    tagline: "Metering, monitoring, and field-service software for energy and utility providers.",
    intro:
      "Energy and utility providers are moving from manual meter reads and paper job cards to live monitoring and automated billing. We build the metering dashboards, customer portals, and field-service tools that make that shift possible without a rip-and-replace of core systems.",
    challenges: [
      "Monitoring usage, outages, and equipment status across a wide service area",
      "Giving customers clear, self-service access to usage and billing information",
      "Coordinating field technicians and maintenance without paper job cards",
      "Integrating new monitoring tools with existing metering and billing systems",
    ],
    solutions: [
      {
        icon: ServerIcon,
        title: "Monitoring dashboards",
        description: "Live dashboards for usage, outages, and equipment status across your entire service area.",
      },
      {
        icon: PhonePortraitIcon,
        title: "Field service apps",
        description: "Mobile tools for technicians to manage job cards, maintenance, and reporting from the field.",
      },
      {
        icon: GitBranchIcon,
        title: "Metering & billing integrations",
        description: "Integrations that connect monitoring tools with existing metering and billing systems, no rip-and-replace required.",
      },
    ],
    complianceNote:
      "We handle customer usage and billing data in line with POPIA, and design monitoring systems with the reliability and audit trail utility regulators expect.",
    relevantServices: ["Custom Software Development", "API & Backend Development", "Cloud & DevOps", "SaaS Products"],
  },
  {
    slug: "media-entertainment",
    label: "Media & Entertainment",
    icon: FilmIcon,
    image: industryMedia,
    tagline: "Content platforms and audience tools for studios, publishers, and creators.",
    intro:
      "Media businesses live or die on getting content in front of an audience reliably, wherever that audience is watching, reading, or listening. We build the content platforms, streaming integrations, and audience tools that keep publishing fast and distribution broad.",
    challenges: [
      "Publishing and managing content across web, mobile, and third-party platforms",
      "Keeping streaming or download performance fast as audience and catalogue grow",
      "Understanding audience engagement across scattered analytics tools",
      "Managing subscriptions, licensing, or rights data accurately",
    ],
    solutions: [
      {
        icon: CloudIcon,
        title: "Content & streaming platforms",
        description: "Scalable platforms for publishing and streaming content that stay fast as your catalogue and audience grow.",
      },
      {
        icon: TrendingUpIcon,
        title: "Audience analytics",
        description: "Unified reporting that brings engagement data from scattered platforms into one view.",
      },
      {
        icon: ServerIcon,
        title: "Subscription & rights management",
        description: "Systems that track subscriptions, licensing, and rights accurately as your catalogue scales.",
      },
    ],
    complianceNote:
      "We handle subscriber and audience data in line with POPIA, with clear consent and data-retention practices across content and analytics platforms.",
    relevantServices: ["Web Development", "SaaS Products", "Cloud & DevOps", "API & Backend Development"],
  },
  {
    slug: "forensic",
    label: "Forensic Services",
    icon: SearchIcon,
    image: industryForensic,
    tagline: "Case management and evidence-handling software for forensic and investigative professionals.",
    intro:
      "Forensic and investigative work lives or dies on the integrity of the record — a case file, an evidence log, or an audit trail has to hold up to scrutiny long after the work is done. We build the case management, evidence handling, and reporting tools that keep forensic accountants, investigators, and audit teams organised and defensible.",
    challenges: [
      "Keeping case files and evidence organised and tamper-evident across long-running investigations",
      "Producing clear, defensible reports for courts, regulators, and clients",
      "Coordinating investigators, auditors, and legal teams working the same case",
      "Handling sensitive personal and financial information with the care a forensic case demands",
    ],
    solutions: [
      {
        icon: DocumentTextIcon,
        title: "Case & evidence management",
        description: "Secure case files with full audit trails, so every piece of evidence and every action taken is logged and defensible.",
      },
      {
        icon: ShieldCheckmarkIcon,
        title: "Secure, access-controlled systems",
        description: "Role-based access and encryption that keep sensitive case data restricted to the people who need it.",
      },
      {
        icon: PeopleIcon,
        title: "Collaboration across teams",
        description: "Shared workspaces that keep investigators, auditors, and legal counsel working from the same case record.",
      },
    ],
    complianceNote:
      "We handle case, evidence, and personal data in line with POPIA, with the audit trails and access controls that forensic and investigative work needs to stand up to scrutiny.",
    relevantServices: ["Custom Software Development", "API & Backend Development", "Cloud & DevOps", "Web Development"],
  },
];

export function getIndustryBySlug(slug: string | undefined) {
  return industries.find((industry) => industry.slug === slug);
}
