const PARTNERS = [
  "WEGLOT",
  "Influence4You",
  "TSE Energy",
  "Monceau",
  "Coudac™",
  "Flomodia",
  "NexaChain",
  "TrustLayer",
  "HealthBridge",
  "DataVault",
]

export default function PartnersBanner() {
  const doubled = [...PARTNERS, ...PARTNERS]

  return (
    <div className="relative bg-[#0f0a20] py-12 overflow-hidden border-y border-white/5">
      {/* Label */}
      <div className="flex justify-center mb-8">
        <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold text-white tracking-wide">
          Join Over{" "}
          <span className="rounded-md bg-green-400 px-2 py-0.5 text-white font-black">1000+</span>{" "}
          Companies with BGS Ecosystem
        </span>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0f0a20] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0f0a20] to-transparent" />

      {/* Marquee track */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-bold tracking-wide text-white hover:border-green-400/40 hover:text-white/80 hover:bg-white/8 transition-all duration-300 cursor-default select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
