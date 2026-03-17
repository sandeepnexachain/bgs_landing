import { useState } from "react"
import { ArrowUpRight, BookOpen, FileText, Video, Download, Clock, User, Search, ChevronRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const CATEGORIES = ["All", "Blog", "Guide", "Case Study", "Video", "Whitepaper"]

const FEATURED = {
  category: "Case Study",
  title: "How NexaChain Reduced Fraud by 94% Using BGS Trust Layer",
  desc: "A deep dive into how we deployed zero-knowledge proof architecture across 50+ enterprise clients, eliminating fraudulent transactions and building verifiable trust at scale.",
  author: "Alex Morgan",
  date: "Jan 15, 2025",
  readTime: "12 min read",
  accent: "#ef4444",
  img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
  tags: ["Blockchain", "Security", "Enterprise"],
}

const RESOURCES = [
  {
    type: "Guide",
    icon: BookOpen,
    title: "The Complete Guide to Web3 Integration",
    desc: "Step-by-step walkthrough for integrating blockchain verification into existing enterprise platforms.",
    author: "Ryan Carter",
    date: "Jan 10, 2025",
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
    date: "Jan 5, 2025",
    readTime: "5 min read",
    accent: "#3b82f6",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tags: ["AI", "Identity"],
  },
  {
    type: "Whitepaper",
    icon: Download,
    title: "Decentralized Trust Architecture: A Technical Overview",
    desc: "Technical deep-dive into BGS Ecosystem's trust layer — protocols, cryptographic primitives, and deployment patterns.",
    author: "Ryan Carter",
    date: "Dec 20, 2024",
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
    date: "Dec 15, 2024",
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
    date: "Dec 8, 2024",
    readTime: "10 min read",
    accent: "#06b6d4",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["HealthTech", "Scale"],
  },
  {
    type: "Blog",
    icon: FileText,
    title: "IoT Security Best Practices for 2025",
    desc: "Securing edge devices and sensor networks — lessons learned from deploying 1M+ connected devices.",
    author: "Alex Morgan",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    accent: "#ec4899",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tags: ["IoT", "Security"],
  },
]

const STATS = [
  { num: "120+", label: "Articles Published" },
  { num: "40+", label: "Case Studies" },
  { num: "15+", label: "Whitepapers" },
  { num: "50K+", label: "Monthly Readers" },
]

const TYPE_ICON: Record<string, React.ElementType> = {
  Blog: FileText,
  Guide: BookOpen,
  "Case Study": FileText,
  Video: Video,
  Whitepaper: Download,
}

export default function Resource() {
  const [active, setActive] = useState("All")
  const [search, setSearch] = useState("")
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = RESOURCES.filter((r) => {
    const matchCat = active === "All" || r.type === active
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="bg-[#080612] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-16">
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(239,68,68,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139,68,255,0.1) 0%, transparent 50%)" }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-red-400" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-red-400">Knowledge Hub</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none text-white tracking-tight mb-6">
            RESOURCE
            <br />
            <span className="text-stroke-red">CENTER</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-10">
            Insights, guides, case studies, and technical deep-dives from the BGS Ecosystem team — everything you need to stay ahead.
          </p>

          {/* Search */}
          <div className="flex items-center gap-3 w-full max-w-lg rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-red-400/50 transition-colors duration-300">
            <Search className="h-4 w-4 text-white/30 shrink-0" />
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 max-w-2xl">
          {STATS.map((s, i) => (
            <div key={i} className={`px-6 py-5 text-center ${i < 3 ? "border-r border-white/10" : ""}`}>
              <p className="text-3xl font-black text-white">{s.num}</p>
              <p className="text-xs text-white/30 uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-16 pb-16">
        <div className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-red-400/30 transition-all duration-500">
          <div className="absolute inset-0">
            <img src={FEATURED.img} alt={FEATURED.title} className="h-full w-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080612] via-[#080612]/80 to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-red-400/40 text-red-400 bg-red-400/10">
                Featured · {FEATURED.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
              {FEATURED.title}
            </h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8 max-w-lg">{FEATURED.desc}</p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/30">
              <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{FEATURED.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{FEATURED.readTime}</span>
              <span>{FEATURED.date}</span>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-red-400 group-hover:gap-5 transition-all duration-300">
              Read Full Story <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 md:px-16 pb-24">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 md:px-5 py-2 text-xs font-black uppercase tracking-widest border-2 transition-all duration-200 ${
                active === c
                  ? "bg-red-500 border-red-500 text-white shadow-[4px_4px_0px_rgba(239,68,68,0.4)]"
                  : "border-white/20 text-white/40 hover:border-white/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Resource cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-white/20 text-sm font-black uppercase tracking-widest">
            No resources found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => {
              const Icon = TYPE_ICON[r.type] ?? FileText
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
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1e] via-transparent to-transparent" />
                    {/* Type badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest"
                      style={{ borderColor: r.accent + "60", color: r.accent, background: r.accent + "15" }}
                    >
                      <Icon className="h-3 w-3" />
                      {r.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${r.accent}, transparent)`, opacity: isHov ? 1 : 0 }}
                    />

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {r.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border"
                          style={{ borderColor: r.accent + "30", color: r.accent + "cc", background: r.accent + "08" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-black uppercase leading-tight text-white mb-3 transition-colors duration-300"
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
        )}
      </section>

      <Footer />
    </div>
  )
}
