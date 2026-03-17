import { useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const FILTERS = ["All", "Platform", "AI", "Blockchain", "Wellness", "Community"]

const PROJECTS = [
  {
    number: "001", title: "NexaChain Protocol", category: "Blockchain", year: "2024",
    tags: ["Web3", "Smart Contracts", "DeFi"],
    desc: "Decentralized trust layer enabling verified transactions across 50+ enterprise clients with zero-knowledge proof architecture.",
    accent: "#ef4444", stat: "50+ Clients",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
  },
  {
    number: "002", title: "HealthBridge Platform", category: "Wellness", year: "2024",
    tags: ["HealthTech", "API", "Mobile"],
    desc: "Unified wellness ecosystem connecting 200+ healthcare providers, fitness coaches, and patients in real time.",
    accent: "#22c55e", stat: "200+ Providers",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    number: "003", title: "TrustLayer AI", category: "AI", year: "2023",
    tags: ["Machine Learning", "NLP", "SaaS"],
    desc: "AI-powered verification engine processing 2M+ identity checks monthly with 99.97% accuracy rate.",
    accent: "#a855f7", stat: "2M+ Checks/mo",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    number: "004", title: "CommunityOS", category: "Community", year: "2023",
    tags: ["Social", "Engagement", "Analytics"],
    desc: "Digital community infrastructure powering 500+ organizations with engagement tools, governance, and analytics.",
    accent: "#f59e0b", stat: "500+ Orgs",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    number: "005", title: "DataVault Platform", category: "Platform", year: "2023",
    tags: ["Cloud", "Security", "Enterprise"],
    desc: "Enterprise-grade secure data infrastructure with end-to-end encryption, serving Fortune 500 companies globally.",
    accent: "#3b82f6", stat: "Fortune 500",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    number: "006", title: "EcoSync Dashboard", category: "Platform", year: "2022",
    tags: ["Dashboard", "Real-time", "IoT"],
    desc: "Real-time operational dashboard integrating 100+ data sources for enterprise decision-making at scale.",
    accent: "#06b6d4", stat: "100+ Sources",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
]

export default function Portfolio() {
  const [active, setActive] = useState("All")
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" className="relative bg-[#080612] overflow-hidden">

      {/* Section Header */}
      <div className="relative px-6 md:px-16 pt-24 pb-16 border-b-2 border-white/10">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-400" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-400">Selected Work</span>
            </div>
            <h2 className="text-6xl md:text-[8rem] font-black uppercase leading-none text-white tracking-tight">
              PORT<span className="text-stroke">FOLIO</span>
            </h2>
          </div>
          <div className="md:mb-4 md:text-right">
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              A curated selection of platforms, products, and digital experiences we've built for the future.
            </p>
            <p className="mt-3 text-4xl font-black text-white/10 select-none">
              {String(filtered.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 md:px-5 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all duration-200 ${
                active === f
                  ? "bg-red-500 border-red-500 text-white shadow-[4px_4px_0px_rgba(239,68,68,0.4)]"
                  : "border-white/20 text-white/40 hover:border-white/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Project List */}
      <div className="relative px-6 md:px-16">
        {filtered.map((p, i) => (
          <div
            key={p.number}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group relative border-b-2 border-white/8 cursor-pointer transition-all duration-300"
            style={{ borderColor: hovered === i ? p.accent + "40" : undefined }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(90deg, ${p.accent}08 0%, transparent 60%)` }}
            />

            <div className="relative z-10 flex items-center gap-4 md:gap-8 py-6 md:py-8">

              {/* Number */}
              <span
                className="text-xs font-black tabular-nums transition-colors duration-300 w-8 md:w-10 shrink-0"
                style={{ color: hovered === i ? p.accent : "rgba(255,255,255,0.15)" }}
              >
                {p.number}
              </span>

              {/* Image — slides in on hover, hidden on mobile */}
              <div
                className="overflow-hidden rounded-xl shrink-0 transition-all duration-500 hidden md:block"
                style={{ width: hovered === i ? "120px" : "0px", height: "72px", opacity: hovered === i ? 1 : 0 }}
              >
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl md:text-3xl font-black uppercase leading-none tracking-tight transition-colors duration-300 truncate"
                  style={{ color: hovered === i ? p.accent : "white" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs text-white/40 leading-relaxed mt-2 max-w-lg transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: hovered === i ? "40px" : "0px", opacity: hovered === i ? 1 : 0 }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Tags — desktop only */}
              <div className="hidden lg:flex gap-2 shrink-0">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[10px] font-black uppercase tracking-widest border transition-all duration-300"
                    style={{
                      borderColor: hovered === i ? p.accent + "60" : "rgba(255,255,255,0.1)",
                      color: hovered === i ? p.accent : "rgba(255,255,255,0.3)",
                      background: hovered === i ? p.accent + "10" : "transparent",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Stat */}
              <div className="text-right shrink-0 w-24 md:w-32">
                <p
                  className="text-sm md:text-lg font-black transition-colors duration-300"
                  style={{ color: hovered === i ? p.accent : "rgba(255,255,255,0.2)" }}
                >
                  {p.stat}
                </p>
                <p className="text-xs text-white/20 uppercase tracking-wider">{p.year}</p>
              </div>

              {/* Arrow */}
              <div
                className="shrink-0 w-8 h-8 md:w-10 md:h-10 border-2 flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: hovered === i ? p.accent : "rgba(255,255,255,0.1)",
                  background: hovered === i ? p.accent : "transparent",
                  transform: hovered === i ? "rotate(0deg)" : "rotate(-45deg)",
                }}
              >
                <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="relative px-6 md:px-16 py-16 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-white/10">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "99.9%", label: "Uptime Guarantee" },
            { num: "12M+", label: "Users Served" },
            { num: "4.9★", label: "Client Rating" },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-6 md:p-10 text-center ${i % 2 === 0 && i < 3 ? "border-r-2 border-white/10" : ""} ${i < 2 ? "border-b-2 md:border-b-0 border-white/10" : ""} ${i === 1 ? "md:border-r-2 md:border-white/10" : ""} ${i === 2 ? "md:border-r-2 md:border-white/10" : ""} group hover:bg-white/3 transition-colors duration-300`}
            >
              <p className="text-4xl md:text-6xl font-black text-white leading-none mb-2 group-hover:text-red-400 transition-colors duration-300">
                {s.num}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">{s.label}</p>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-red-400" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
              Explore all {PROJECTS.length} projects
            </span>
          </div>
          <button className="group flex items-center gap-3 border-2 border-white/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:border-red-400 hover:text-red-400 transition-all duration-300">
            View All Work
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

    </section>
  )
}
