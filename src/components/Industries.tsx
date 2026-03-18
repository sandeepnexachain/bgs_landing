import { useState } from "react"
import { ArrowUpRight, Cpu, Cloud, Shield, Brain, Code2, Wifi, Database, Smartphone } from "lucide-react"

const INDUSTRIES = [
  {
    number: "01", icon: Brain, title: "Artificial Intelligence", subtitle: "AI & Machine Learning",
    desc: "Building intelligent systems that learn, adapt, and automate — from NLP engines to predictive analytics platforms powering next-gen decisions.",
    tags: ["Machine Learning", "NLP", "Computer Vision", "Automation"], accent: "#a855f7", stat: "99.97%", statLabel: "Accuracy Rate",
    bg: "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.15) 0%, transparent 60%)",
  },
  {
    number: "02", icon: Cloud, title: "Cloud Infrastructure", subtitle: "DevOps & Cloud",
    desc: "Scalable, resilient cloud architectures on AWS, GCP, and Azure — designed for zero-downtime deployments and enterprise-grade reliability.",
    tags: ["AWS", "Kubernetes", "CI/CD", "Microservices"], accent: "#3b82f6", stat: "99.9%", statLabel: "Uptime SLA",
    bg: "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.15) 0%, transparent 60%)",
  },
  {
    number: "03", icon: Shield, title: "Cybersecurity", subtitle: "Security & Compliance",
    desc: "End-to-end security frameworks, penetration testing, and compliance automation protecting digital assets across every attack surface.",
    tags: ["Zero Trust", "SOC 2", "Pen Testing", "SIEM"], accent: "#ef4444", stat: "0", statLabel: "Breaches Recorded",
    bg: "radial-gradient(circle at 70% 30%, rgba(239,68,68,0.15) 0%, transparent 60%)",
  },
  {
    number: "04", icon: Code2, title: "Software Development", subtitle: "Full-Stack Engineering",
    desc: "From MVPs to enterprise platforms — we engineer robust, scalable software with modern stacks, clean architecture, and rapid delivery cycles.",
    tags: ["React", "Node.js", "Python", "TypeScript"], accent: "#22c55e", stat: "200+", statLabel: "Apps Shipped",
    bg: "radial-gradient(circle at 30% 60%, rgba(34,197,94,0.15) 0%, transparent 60%)",
  },
  {
    number: "05", icon: Database, title: "Data & Analytics", subtitle: "Big Data & BI",
    desc: "Transforming raw data into strategic intelligence — real-time pipelines, data warehouses, and BI dashboards that drive measurable outcomes.",
    tags: ["Spark", "Snowflake", "Power BI", "ETL"], accent: "#f59e0b", stat: "12M+", statLabel: "Records Processed",
    bg: "radial-gradient(circle at 60% 70%, rgba(245,158,11,0.15) 0%, transparent 60%)",
  },
  {
    number: "06", icon: Smartphone, title: "Mobile & Web Apps", subtitle: "Cross-Platform",
    desc: "Pixel-perfect, performant mobile and web experiences built with React Native, Flutter, and modern web standards for millions of users.",
    tags: ["React Native", "Flutter", "PWA", "iOS/Android"], accent: "#06b6d4", stat: "4.9★", statLabel: "App Store Rating",
    bg: "radial-gradient(circle at 80% 60%, rgba(6,182,212,0.15) 0%, transparent 60%)",
  },
  {
    number: "07", icon: Wifi, title: "IoT & Edge Computing", subtitle: "Connected Devices",
    desc: "Connecting the physical and digital worlds — IoT platforms, edge computing solutions, and real-time sensor networks at industrial scale.",
    tags: ["MQTT", "Edge AI", "Embedded", "5G"], accent: "#ec4899", stat: "1M+", statLabel: "Devices Connected",
    bg: "radial-gradient(circle at 20% 40%, rgba(236,72,153,0.15) 0%, transparent 60%)",
  },
  {
    number: "08", icon: Cpu, title: "Blockchain & Web3", subtitle: "Decentralized Tech",
    desc: "Smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions built for trust, transparency, and decentralization.",
    tags: ["Solidity", "Ethereum", "DeFi", "Smart Contracts"], accent: "#f97316", stat: "50+", statLabel: "Protocols Deployed",
    bg: "radial-gradient(circle at 50% 20%, rgba(249,115,22,0.15) 0%, transparent 60%)",
  },
]

export default function Industries() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="industries" className="relative bg-[#0e0b1e] overflow-hidden">

      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 md:px-16 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-green-400" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-green-400">What We Serve</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none text-white tracking-tight">
              TECH
              <br />
              <span className="text-stroke-green">INDUSTRIES</span>
            </h2>
          </div>
          <div className="md:mb-2 md:max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-white/40">
              Deep expertise across every vertical of the technology landscape — from AI and cloud to blockchain and IoT.
            </p>
            <div className="mt-4 flex items-center md:justify-end gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-white">8+</p>
                <p className="text-xs text-white/30 uppercase tracking-wider">Verticals</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">500+</p>
                <p className="text-xs text-white/30 uppercase tracking-wider">Projects</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">50+</p>
                <p className="text-xs text-white/30 uppercase tracking-wider">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            const isHovered = hovered === i
            const isWide = i === 0 || i === 7
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ${isWide ? "sm:col-span-2" : "col-span-1"}`}
                style={{
                  minHeight: "260px",
                  borderColor: isHovered ? ind.accent + "50" : "rgba(255,255,255,0.07)",
                  background: "#0e0b1e",
                  boxShadow: isHovered ? `0 0 40px ${ind.accent}20` : "none",
                }}
              >
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: ind.bg, opacity: isHovered ? 1 : 0.4 }}
                />
                <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${ind.accent}, transparent)`, opacity: isHovered ? 1 : 0 }}
                />
                <div className="absolute -right-3 -bottom-4 text-[7rem] font-black leading-none select-none transition-all duration-500"
                  style={{ color: ind.accent, opacity: isHovered ? 0.06 : 0.03 }}
                >
                  {ind.number}
                </div>

                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full" style={{ minHeight: "260px" }}>
                  <div className="flex items-start justify-between mb-auto">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500"
                      style={{
                        borderColor: isHovered ? ind.accent + "60" : "rgba(255,255,255,0.1)",
                        background: isHovered ? ind.accent + "20" : "rgba(255,255,255,0.03)",
                        boxShadow: isHovered ? `0 0 20px ${ind.accent}40` : "none",
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: ind.accent }} />
                    </div>
                    <div
                      className="flex h-8 w-8 items-center justify-center border transition-all duration-500"
                      style={{
                        borderColor: isHovered ? ind.accent : "rgba(255,255,255,0.1)",
                        background: isHovered ? ind.accent : "transparent",
                        transform: isHovered ? "rotate(0deg)" : "rotate(-45deg)",
                      }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2 transition-colors duration-300"
                      style={{ color: isHovered ? ind.accent : "rgba(255,255,255,0.3)" }}
                    >
                      {ind.subtitle}
                    </p>
                    <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-white mb-3">
                      {ind.title}
                    </h3>
                    <div className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isHovered ? "80px" : "0px", opacity: isHovered ? 1 : 0 }}
                    >
                      <p className="text-xs leading-relaxed text-white/50 mb-3">{ind.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isHovered ? "40px" : "0px", opacity: isHovered ? 1 : 0 }}
                    >
                      {ind.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border"
                          style={{ borderColor: ind.accent + "40", color: ind.accent, background: ind.accent + "10" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-2xl font-black leading-none transition-colors duration-300"
                        style={{ color: isHovered ? ind.accent : "rgba(255,255,255,0.15)" }}
                      >
                        {ind.stat}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/25 mb-0.5">{ind.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
