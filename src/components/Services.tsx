import { Button } from "@/components/ui/button"
import { ShieldCheck, Cpu, HeartPulse, CheckCircle2, Zap, BarChart3, Lock } from "lucide-react"
import { scrollTo } from "./Navbar"
import PartnersBanner from "./PartnersBanner"

const WHY_US = [
  { icon: Zap,          title: "Fast Delivery",    desc: "Rapid deployment with agile methodology ensuring your product reaches market on time." },
  { icon: Lock,         title: "Secure by Design", desc: "Security-first architecture protecting your data and your users at every layer." },
  { icon: BarChart3,    title: "Scalable Growth",  desc: "Infrastructure built to scale with your business from startup to enterprise." },
  { icon: CheckCircle2, title: "Proven Results",   desc: "Track record of successful deployments across industries with measurable outcomes." },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#1a1030] overflow-hidden">

      {/* Hero Banner */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-8 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(239,68,68,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(139,68,255,0.3) 0%, transparent 60%)" }}
        />
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400 mb-3">What We Offer</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">
            OUR
            <br />
            <span className="text-green-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.7)]">SERVICES</span>
          </h2>
          <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
        </div>
        <div className="relative z-10 md:max-w-md md:text-right">
          <p className="text-sm md:text-base leading-relaxed text-white/60">
            We deliver end-to-end digital solutions that bridge the gap between real-world services and digital innovation — built for scale, trust, and impact.
          </p>
          <Button
            onClick={() => scrollTo("contact")}
            className="mt-6 rounded-full bg-green-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Partners Marquee Banner */}
      <PartnersBanner />

      {/* Bento Services Grid */}
      <div className="relative z-10 mx-4 md:mx-16 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1 — Digital Ecosystem */}
        <div className="group relative rounded-3xl overflow-hidden bg-[#0d0820] border border-white/10 h-72 cursor-pointer hover:border-green-400/30 transition-all duration-500">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 20%, rgba(34,197,94,0.15) 0%, transparent 60%)" }} />
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-red-400/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            </div>
          </div>
          <div className="absolute top-6 right-24 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute top-16 right-6 w-1.5 h-1.5 rounded-full bg-green-400/50" />
          <div className="absolute bottom-16 right-12 w-2 h-2 rounded-full bg-white/10" />
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-2">01</p>
            <h3 className="text-4xl font-black leading-none text-white group-hover:text-green-400 transition-colors duration-300">
              Digital
              <br />
              <span className="text-green-400">Ecosystem</span>
            </h3>
            <p className="mt-3 text-xs text-white/40 leading-relaxed max-w-[200px]">End-to-end platforms connecting real-world services online.</p>
          </div>
        </div>

        {/* Card 2 — Tech Innovation | tall card spans 2 rows on lg */}
        <div className="group relative sm:row-span-2 lg:row-span-2 rounded-3xl overflow-hidden border border-white/10 h-72 sm:h-full cursor-pointer hover:border-green-400/30 transition-all duration-500" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2010 100%)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 60%, rgba(34,197,94,0.12) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 right-0 text-[5.5rem] font-black text-green-400/10 leading-none select-none px-4 pb-2 overflow-hidden">
            Innovation
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-4 rounded-full border border-green-400/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-green-400" />
                </div>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div key={deg} className="absolute w-2 h-2 rounded-full bg-green-400/40"
                  style={{ top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 52}px - 4px)`, left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 52}px - 4px)` }}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 p-8 flex flex-col h-full">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-2">03</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Tech Innovation</p>
            </div>
            <div className="mt-auto">
              <h3 className="text-5xl font-black leading-none text-white">
                Future
                <br />
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">Ready</span>
              </h3>
              <p className="mt-3 text-xs text-white/40 leading-relaxed">AI integrations & custom development tailored to your needs.</p>
            </div>
          </div>
        </div>

        {/* Card 3 — Trust & Transparency */}
        <div className="group relative rounded-3xl overflow-hidden bg-[#120820] border border-white/10 h-72 cursor-pointer hover:border-green-400/30 transition-all duration-500">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 80%, rgba(139,68,255,0.2) 0%, transparent 60%)" }} />
          <div className="absolute -right-4 -top-4 text-[8rem] font-black text-white/[0.03] leading-none select-none">02</div>
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-purple-400/20 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-purple-400/30 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-purple-400 drop-shadow-[0_0_8px_rgba(139,68,255,0.8)]" />
            </div>
          </div>
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">02</p>
            <h3 className="text-3xl font-black leading-tight text-white">
              Trust &
              <br />
              <span className="text-purple-400">Transparency</span>
            </h3>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">Blockchain-backed verification across every transaction.</p>
          </div>
        </div>

        {/* Card 4 — Wellness */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 h-72 cursor-pointer hover:border-green-400/30 transition-all duration-500" style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2a0f0f 100%)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(34,197,94,0.18) 0%, transparent 55%)" }} />
          <div className="absolute top-1/2 right-8 -translate-y-1/2">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border border-green-400/10 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-2 rounded-full border border-green-400/20 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
              <div className="absolute inset-4 rounded-full border border-green-400/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-2">04</p>
            <h3 className="text-3xl font-black leading-tight text-white">
              Innovative
              <br />
              <span className="text-green-400"> Service</span>
            </h3>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">Bridging healthcare, fitness & clients in one unified space.</p>
          </div>
        </div>

        {/* Card 5 — Platform Integration */}
        <div className="group relative rounded-3xl overflow-hidden bg-[#0a0a1a] border border-white/10 h-72 cursor-pointer hover:border-green-400/30 transition-all duration-500">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg width="200" height="120" viewBox="0 0 200 120">
              {[[20,20],[100,20],[180,20],[20,60],[100,60],[180,60],[20,100],[100,100],[180,100]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="rgba(59,130,246,0.8)" />
              ))}
              <line x1="20" y1="20" x2="100" y2="60" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
              <line x1="100" y1="20" x2="180" y2="60" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
              <line x1="20" y1="60" x2="100" y2="100" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
              <line x1="100" y1="60" x2="180" y2="100" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
            </svg>
          </div>
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">05</p>
            <h3 className="text-3xl font-black leading-tight text-white">
              Platform
              <br />
              <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">Integration</span>
            </h3>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">Seamless API connectivity to unify your tools & workflows.</p>
          </div>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="relative z-10 px-6 md:px-16 mt-24 pb-24">
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-400/40" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">Why BGS Ecosystem</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-400/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((w, i) => {
            const Icon = w.icon
            return (
              <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-green-400/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 text-[6rem] font-black text-white/[0.02] leading-none select-none pr-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 border border-green-400/20 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-500">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-wide text-white mb-3">{w.title}</h4>
                  <p className="text-sm leading-relaxed text-white/50">{w.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative z-10 mx-4 md:mx-16 mb-24 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-green-500/20" />
        <div className="absolute inset-0 border border-green-400/20 rounded-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 md:px-16 py-12 md:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400 mb-2">Ready to Start?</p>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white leading-tight">
              LET'S BUILD SOMETHING
              <br />
              <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]">EXTRAORDINARY</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-green-500 px-10 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-600 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all duration-300"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("portfolio")}
              className="rounded-full border-2 border-white/30 bg-transparent px-10 py-6 text-sm font-bold uppercase tracking-wide text-white hover:border-green-400 hover:text-green-400 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
