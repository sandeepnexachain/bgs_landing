import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

interface AboutProps {
  onNavigate: (page: string) => void
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#5B4B8A] via-[#7B5B8A] to-[#8B6B9A]">
      {/* Background Spline */}
      <div className="absolute inset-0 z-0 opacity-40">
        <iframe
          src="https://my.spline.design/motiontrails-mQJiWP02BoJRJj7QScWZ8Yil/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-16 py-8">
        <ul className="flex gap-12 text-sm font-bold tracking-wide text-white">
          {["Home", "About", "Services", "Industries", "Resource", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                item === "About" ? "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" : ""
              }`}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="relative z-10 px-16 pb-20 pt-8">

        {/* ABOUT US heading + top section */}
        <div className="flex items-start gap-10">

          {/* Left: Big heading + taglines */}
          <div className="w-72 shrink-0">
            <h1 className="font-black leading-none text-white" style={{ fontSize: "7rem" }}>
              <span className="text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]">ABOUT</span>
              <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">US</span>
            </h1>
            <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-red-400 to-transparent" />
            <p className="mt-6 text-sm font-semibold text-white/70 uppercase tracking-wider">
              BGS Ecosystem
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Where real-world services meet digital innovation — empowering trusted connections through technology, wellness, and transparency.
            </p>
          </div>

          {/* Center: Large image */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="BGS Office"
              className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right: Our Philosophy */}
          <div className="w-64 shrink-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80"
                alt="Philosophy"
                className="h-36 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Our <span className="text-red-400">Philosophy</span>
            </h3>
            <div className="mt-1 h-[2px] w-12 bg-gradient-to-r from-red-400 to-transparent" />
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              At BGS Ecosystem, we believe in creating trusted, personalized digital environments that reflect our clients' goals and values.
            </p>
          </div>
        </div>

        {/* MEET THE PRINCIPALS */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_60px_rgba(239,68,68,0.1)] px-10 py-14">
          <div className="flex items-center gap-12">

            {/* Person 1 */}
            <div className="flex flex-col items-center text-center w-56 shrink-0">
              <div className="overflow-hidden rounded-2xl border border-red-400/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] w-48 h-56">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Founder"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="mt-4 text-lg font-black uppercase tracking-wide text-white">Alex Morgan</h4>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Founder & CEO</p>
            </div>

            {/* Center text */}
            <div className="flex-1 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-2">Leadership</p>
              <h2 className="text-4xl font-black uppercase leading-tight text-white">
                MEET THE<br />
                <span className="text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">PRINCIPALS</span>
              </h2>
              <div className="mx-auto mt-3 h-[2px] w-24 bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm mx-auto">
                As principals and licensed innovators, our founders oversee the day-to-day operations of BGS Ecosystem — driving the design, technology, and vision of our platform.
              </p>
            </div>

            {/* Person 2 */}
            <div className="flex flex-col items-center text-center w-56 shrink-0">
              <div className="overflow-hidden rounded-2xl border border-red-400/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] w-48 h-56">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Co-Founder"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="mt-4 text-lg font-black uppercase tracking-wide text-white">Ryan Carter</h4>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Co-Founder & CTO</p>
            </div>

          </div>
        </div>

      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 left-16 z-10 flex gap-6">
        <Twitter className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Linkedin className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Facebook className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Instagram className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
      </div>
    </div>
  )
}
