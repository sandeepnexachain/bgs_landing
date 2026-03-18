export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-[#3B2D6A] via-[#5B4B8A] to-[#6B4B7A] px-6 md:px-16 py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top: ABOUT US + images */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[320px_1fr_280px] gap-8 items-start">
        <div>
          <div className="leading-none">
            <p className="text-[5rem] md:text-[7rem] font-black text-green-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.7)] leading-none">ABOUT</p>
            <p className="text-[5rem] md:text-[7rem] font-black text-white leading-none -mt-4">US</p>
          </div>
          <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-green-400">BGS Ecosystem</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
            Where real-world services meet digital innovation — empowering trusted connections through technology, wellness, and transparency.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(34,197,94,0.15)] h-72">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
            alt="BGS Office"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(34,197,94,0.1)] h-36">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
              alt="Our Philosophy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <h3 className="mt-5 text-xl font-black text-white">
            Our <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">Philosophy</span>
          </h3>
          <div className="mt-1 h-[2px] w-10 bg-green-400 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            At BGS Ecosystem, we build trusted, personalized digital environments that reflect our clients' goals, values, and vision for the future.
          </p>
        </div>
      </div>

      {/* Meet the Principals */}
      <div className="relative z-10 mt-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-400/50" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">Leadership</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-400/50" />
        </div>

        {/* Mobile: stack all three; Desktop: 3-col grid */}
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-3 md:gap-8 md:items-center">
          <PersonCard name="Alex Morgan" role="Founder & CEO" img="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" />

          <div className="text-center px-4 md:px-8 max-w-sm order-first md:order-none">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-white">
              MEET THE
              <br />
              <span className="text-green-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]">PRINCIPALS</span>
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-20 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Our founders oversee the day-to-day operations of BGS Ecosystem — driving the design, technology, and vision of our platform forward.
            </p>
          </div>

          <PersonCard name="Ryan Carter" role="Co-Founder & CTO" img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" />
        </div>
      </div>
    </section>
  )
}

function PersonCard({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-green-400/40 to-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative overflow-hidden rounded-3xl border border-green-400/20 w-56 h-72 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
          <img src={img} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B2D6A]/80 via-transparent to-transparent" />
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-black uppercase tracking-wide text-white">{name}</h4>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mt-1">{role}</p>
      </div>
    </div>
  )
}
