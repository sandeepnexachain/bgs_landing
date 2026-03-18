import { Mail, Phone, MapPin } from "lucide-react"
import { scrollTo } from "./Navbar"

const QUICK_LINKS = ["Home", "About", "Services", "Industries", "Portfolio", "Contact"]
const SOCIAL = ["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"]
const LEGAL = ["Terms of service", "Privacy policy", "Cookie policy"]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0812]">

      {/* Contact Strip */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-12 border-b border-white/5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-green-400 mb-2">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Let's build something <span className="text-green-400">extraordinary</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hello@bgsecosystem.com"
            className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-white hover:border-green-400/50 hover:bg-white/10 transition-all duration-300"
          >
            <Mail className="h-4 w-4 text-green-400" />
            hello@bgsecosystem.com
          </a>
          <a
            href="tel:+18008270001"
            className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-white hover:border-green-400/50 hover:bg-white/10 transition-all duration-300"
          >
            <Phone className="h-4 w-4 text-green-400" />
            +1-800-BGS-0001
          </a>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="px-4 md:px-16 py-10">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0d0820 60%, #1a1030 100%)" }}>
          {/* Globe visual — hidden on small screens */}
          <div className="absolute right-0 top-0 bottom-0 w-64 md:w-96 opacity-60 hidden sm:block">
            <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="320" cy="150" rx="140" ry="140" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" />
              <ellipse cx="320" cy="150" rx="100" ry="140" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <ellipse cx="320" cy="150" rx="50" ry="140" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <line x1="180" y1="150" x2="460" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="320" y1="10" x2="320" y2="290" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              {Array.from({ length: 120 }).map((_, i) => {
                const lat = (Math.random() - 0.5) * Math.PI
                const lng = (Math.random() - 0.5) * Math.PI * 1.2
                const r = 130
                const x = 320 + r * Math.cos(lat) * Math.sin(lng)
                const y = 150 + r * Math.sin(lat)
                const opacity = 0.15 + Math.random() * 0.5
                return <circle key={i} cx={x} cy={y} r={Math.random() * 1.5 + 0.5} fill="white" opacity={opacity} />
              })}
              {[[280,100,350,130],[310,80,370,160],[260,140,340,170],[300,160,360,120]].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
              ))}
              {[[280,100],[350,130],[310,80],[370,160],[260,140],[340,170]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="rgba(34,197,94,0.8)" />
              ))}
              <defs>
                <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 15% 50%, rgba(139,68,255,0.2) 0%, transparent 50%)" }} />

          <div className="relative z-10 px-8 md:px-14 py-12 md:py-14 max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Experience the future<br />of digital services
            </h3>
            <p className="text-white/50 text-sm mb-8">
              150+ integrated solutions across technology, wellness, and community.
            </p>
            <button
              onClick={() => scrollTo("services")}
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors duration-300"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="px-6 md:px-16 py-14 grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 border-t border-white/5">

        {/* Brand col — full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-md bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.6)]">
              <div className="w-3 h-3 rounded-sm bg-white/80" />
            </div>
            <span className="text-white font-black text-lg tracking-wide">
              <span className="text-green-400">BGS</span> Ecosystem
            </span>
          </div>

          <div className="space-y-1 text-sm text-white/40 mb-6">
            <div className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-white/20" />
              <span>123 Innovation Drive, Suite 400<br />Tech City, TC 10001<br />United States</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div>
              <p className="text-xs text-white/30 mb-1">Phone number</p>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-green-400" />
                <span className="text-sm font-semibold text-white">+1-800-BGS-0001</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 mb-1">Email</p>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-green-400" />
                <span className="text-sm font-semibold text-white break-all">hello@bgsecosystem.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Quick links</p>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-sm text-white/50 hover:text-green-400 transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Social</p>
          <ul className="space-y-3">
            {SOCIAL.map((s) => (
              <li key={s}>
                <a href="#" className="text-sm text-white/50 hover:text-green-400 transition-colors duration-200">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Legal</p>
          <ul className="space-y-3">
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-white/50 hover:text-green-400 transition-colors duration-200">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-16 py-5 border-t border-white/5 flex items-center justify-center">
        <p className="text-xs text-white/25">
          © 2025 BGS Ecosystem. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
