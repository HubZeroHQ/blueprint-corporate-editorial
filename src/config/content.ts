export const services = [
  {
    slug: "strategic-advisory",
    title: "Strategic Advisory",
    summary: "Aligning digital initiatives with long-term business objectives through rigorous analysis, technical due diligence, and architectural planning.",
    capabilities: ["Digital transformation", "Technical due diligence", "Architecture planning", "Vendor selection"],
    challenge: "Leaders often inherit fragmented technology decisions without a shared view of risk, value, or sequence. Investment slows because every decision reopens the same strategic questions.",
    approach: "We establish a factual baseline, make trade-offs visible, and turn the preferred direction into a sequenced roadmap with explicit decision gates.",
    outcome: "A defensible investment plan that connects technical choices to operating priorities."
  },
  {
    slug: "systems-engineering",
    title: "Systems Engineering",
    summary: "Architecting resilient, scalable platforms designed to handle complexity without introducing fragility.",
    capabilities: ["Cloud architecture", "API development", "Legacy modernisation", "Performance engineering"],
    challenge: "Critical platforms accumulate brittle dependencies, unclear ownership, and scaling limits that make even routine change risky.",
    approach: "We map the system before changing it, isolate high-risk paths, and modernise in measured increments that preserve continuity.",
    outcome: "A resilient platform that teams can understand, operate, and evolve with confidence."
  },
  {
    slug: "experience-design",
    title: "Experience Design",
    summary: "Crafting interfaces that communicate clearly, build trust, and simplify complicated interactions.",
    capabilities: ["User research", "Interface design", "Design systems", "Usability testing"],
    challenge: "Complex enterprise workflows often expose organisational complexity directly to the people expected to use them.",
    approach: "We study real decisions and hand-offs, then shape content, interaction, and visual hierarchy around the work people need to complete.",
    outcome: "Clearer workflows, faster adoption, and an interface that earns trust through use."
  }
] as const;

export const work = [
  { slug: "vanguard-logistics", client: "Vanguard Logistics", category: "Systems Engineering", year: "2026", title: "Modernising a global supply chain network.", summary: "A unified event architecture replaced fragmented tracking across regional operations.", image: "/images/placeholders/work-logistics.jpg", role: "Architecture, engineering", objective: "Give operations teams one reliable view of shipments without interrupting regional fulfilment.", solution: "Meridian introduced an event backbone behind the existing interfaces, migrated routes in controlled waves, and established shared operational telemetry.", result: "Exception triage moved from hours to minutes while regional teams retained continuity throughout the transition." },
  { slug: "oakhaven-health", client: "Oakhaven Health", category: "Experience Design", year: "2026", title: "Unifying clinical data across 40 hospitals.", summary: "A coherent clinical workspace reduced charting effort without obscuring patient context.", image: "/images/placeholders/work-healthcare.jpg", role: "Research, product design", objective: "Reduce the cognitive load of moving between fragmented clinical records while preserving safety and auditability.", solution: "Meridian mapped clinical decisions, established a common information hierarchy, and tested the workspace across representative care settings.", result: "Median charting time fell by 30% in the fictional programme evaluation." },
  { slug: "fortis-capital", client: "Fortis Capital", category: "Strategic Advisory", year: "2025", title: "Technical due diligence for a fintech acquisition.", summary: "An evidence-led review clarified platform risk before a major investment decision.", image: "/images/placeholders/hero.jpg", role: "Due diligence, strategy", objective: "Determine whether the target platform could support the proposed growth case without a disruptive rebuild.", solution: "Meridian assessed architecture, delivery practice, security posture, and operating costs against the investment thesis.", result: "The board entered negotiations with a prioritised risk register and a costed 18-month modernisation plan." },
  { slug: "aero-dynamics", client: "Aero Dynamics", category: "Systems Engineering", year: "2025", title: "Real-time telemetry analytics.", summary: "A high-throughput data pipeline made aircraft sensor events usable in operational time.", image: "/images/placeholders/services.jpg", role: "Data architecture, engineering", objective: "Process growing telemetry volumes while giving analysts dependable, traceable signals.", solution: "Meridian separated ingestion, validation, and analysis workloads and designed explicit recovery paths for delayed or malformed events.", result: "The new pipeline sustained the target load with predictable recovery and clearer operational ownership." }
] as const;

export const industries = [
  { slug: "financial-services", title: "Financial Services", summary: "Modernising banking, trading, and wealth platforms where resilience and traceability are non-negotiable.", priorities: ["Operational resilience", "Regulatory traceability", "Controlled modernisation"] },
  { slug: "healthcare", title: "Healthcare", summary: "Designing secure data platforms around clinical decisions, privacy, and continuity of care.", priorities: ["Clinical usability", "Information governance", "System interoperability"] },
  { slug: "logistics", title: "Logistics", summary: "Connecting complex supply networks through dependable events, shared visibility, and exception-led operations.", priorities: ["Real-time visibility", "Network resilience", "Operational clarity"] },
  { slug: "enterprise-software", title: "Enterprise Software", summary: "Helping product organisations scale multi-tenant systems without allowing complexity to outrun comprehension.", priorities: ["Platform scalability", "Product coherence", "Engineering effectiveness"] }
] as const;

export const posts = [
  { slug: "engineering-for-longevity", title: "Engineering for longevity: why proven technology wins", date: "12 October 2026", category: "Engineering", excerpt: "Reliable systems are built by spending innovation on the business problem, not repeatedly replacing the foundation.", lead: "In an industry obsessed with the new, the most maintainable systems are often built using proven, stable technologies." },
  { slug: "designing-with-typography", title: "The hierarchy of information", date: "28 September 2026", category: "Design", excerpt: "How typographic scale and rhythm can clarify dense enterprise workflows.", lead: "Typography is not a finishing layer. In complex products, it is the primary interface for understanding priority and relationship." },
  { slug: "technical-due-diligence", title: "Beyond the codebase", date: "15 September 2026", category: "Strategy", excerpt: "What a serious technical review reveals about an organisation’s capacity to change.", lead: "A codebase is evidence, but never the whole story. Delivery habits, ownership, and operating constraints determine whether architecture can support the plan." }
] as const;

export const staticRoutes = ["/", "/about", "/services", "/industries", "/work", "/team", "/careers", "/blog", "/contact", "/privacy", "/terms"] as const;
