import { ArrowUpRight, BookOpen, FileText, Video, Download, Clock, User, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RESOURCES = [
  {
    type: "Case Study",
    icon: FileText,
    title: "How NexaChain Reduced Fraud by 94%",
    desc: "Zero-knowledge proof architecture deployed across 50+ enterprise clients, eliminating fraudulent transactions at scale.",
    author: "Alex Morgan",
    readTime: "12 min read",
    accent: "#ef4444",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    tags: ["Blockchain", "Security"],
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "The Complete Guide to Web3 Integration",
    desc: "Step-by-step walkthrough for integrating blockchain verification into existing enterprise platforms.",
    author: "Ryan Carter",
    readTime: "8 min read",
    accent: "#a855f7",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tags: ["Web3", "Integration"],
  },
  {
    type: "Blog",
    icon: FileText,
    title: "AI-Powered Identity Verification: 2025 Trends",
    desc: "Exploring the latest advancements in machine learning models for real-time identity validation.",
    author: "Alex Morgan",
    readTime: "5 min read",
    accent: "#3b82f6",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tags: ["AI", "Identity"],
  },
  {
    type: "Whitepaper",
    icon: Download,
    title: "Decentralized Trust Architecture: Technical Overview",
    desc: "Technical deep-dive into BGS Ecosystem's trust layer — protocols, cryptographic primitives, and deployment patterns.",
    author: "Ryan Carter",
    readTime: "20 min read",
    accent: "#22c55e",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Architecture", "Crypto"],
  },
  {
    type: "Video",
    icon: Video,
    title: "Building Scalable Cloud Infrastructure on AWS",
    desc: "Video walkthrough of our multi-region deployment strategy achieving 99.9% uptime for enterprise clients.",
    author: "Alex Morgan",
    readTime: "45 min watch",
    accent: "#f59e0b",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    tags: ["Cloud", "AWS"],
  },
  {
    type: "Case Study",
    icon: FileText,
    title: "HealthBridge: Connecting 200+ Providers in 90 Days",
    desc: "How we built and deployed a unified wellness platform at scale, onboarding hundreds of healthcare providers.",
    author: "Ryan Carter",
    readTime: "10 min read",
    accent: "#06b6d4",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["HealthTech", "Scale"],
  },
]

export default function ResourceSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const navigate = useNavigate()

  return (
    <section id="resource" className="relative bg-[#0a0812] overflow-hidden">

      {/* bg dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(239,68,68,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(139,68,255,0.08) 0%, transparent 50%)" }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 md:px-16 pt-24 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-green-400" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-green-400">Knowledge Hub</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none text-white tracking-tight">
              RESOURCE
              <br />
              <span className="text-stroke-green">CENTER</span>
            </h2>
          </div>
          <div className="md:mb-2 md:max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-white/40">
              Insights, guides, case studies, and technical deep-dives from the BGS Ecosystem team.
            </p>
            <button
              onClick={() => navigate("/resource")}
              className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-400 hover:gap-4 transition-all duration-300"
            >
              View All Resources <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r, i) => {
            const Icon = r.icon
            const isHov = hovered === i
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 flex flex-col"
                style={{
                  borderColor: isHov ? r.accent + "50" : "rgba(255,255,255,0.08)",
                  background: "#0e0b1e",
                  boxShadow: isHov ? `0 0 40px ${r.accent}15` : "none",
                }}
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 z-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${r.accent}, transparent)`, opacity: isHov ? 1 : 0 }}
                />

                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1e] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest"
                    style={{ borderColor: r.accent + "60", color: r.accent, background: r.accent + "15" }}
                  >
                    <Icon className="h-3 w-3" />
                    {r.type}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {r.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border"
                        style={{ borderColor: r.accent + "30", color: r.accent + "cc", background: r.accent + "08" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-black uppercase leading-tight mb-3 transition-colors duration-300"
                    style={{ color: isHov ? r.accent : "white" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed flex-1">{r.desc}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] text-white/25">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" />{r.author}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{r.readTime}</span>
                    </div>
                    <div
                      className="flex h-8 w-8 items-center justify-center border-2 transition-all duration-300"
                      style={{
                        borderColor: isHov ? r.accent : "rgba(255,255,255,0.1)",
                        background: isHov ? r.accent : "transparent",
                        transform: isHov ? "rotate(0deg)" : "rotate(-45deg)",
                      }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/8 pt-10">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-green-400" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
              120+ resources available
            </span>
          </div>
          <button
            onClick={() => navigate("/resource")}
            className="group flex items-center gap-3 border-2 border-white/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:border-green-400 hover:text-green-400 transition-all duration-300"
          >
            Explore All Resources
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

    </section>
  )
}
