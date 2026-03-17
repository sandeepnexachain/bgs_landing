import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Instagram, ArrowDown } from "lucide-react"
import { scrollTo } from "./Navbar"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/motiontrails-mQJiWP02BoJRJj7QScWZ8Yil/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>

      <div className="relative z-10 flex items-center justify-between px-16 pt-36">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h2 className="text-5xl font-black uppercase tracking-[0.15em] leading-none">
              <span className="text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]">BGS </span>
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Ecosystem</span>
            </h2>
            <div className="mt-2 h-[2px] w-48 bg-gradient-to-r from-red-400 via-red-300 to-transparent shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-tight text-white">
            WHERE REAL WORLD SERVICE
            <br />
            MEET DIGITAL INNOVATION
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/80">
            Empowering trusted connections through technology, wellness, and transparency.
          </p>

          <div className="mb-12 flex gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] hover:bg-white/90"
            >
              DETAILS
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("about")}
              className="rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:border-red-400 hover:bg-white/10 hover:text-red-400"
            >
              READ MORE
            </Button>
          </div>

          <div className="flex gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="relative animate-pulse-scale">
          <div className="h-[720px] w-[540px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2812%29-AUzcUJl45XueiOf0D1t9cvkzHg1wce.png"
              alt="BGS Hero"
              className="h-full w-full object-contain transition-all duration-500 hover:scale-110"
              style={{ filter: "drop-shadow(0 0 50px rgba(239,68,68,0.8)) drop-shadow(0 0 100px rgba(239,68,68,0.5))" }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-red-400 transition-colors duration-300"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>

      <div className="absolute bottom-10 left-16 z-10 flex gap-6">
        <Twitter className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Linkedin className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Facebook className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Instagram className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
      </div>
    </section>
  )
}
