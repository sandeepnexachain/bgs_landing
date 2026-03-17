const NAV_ITEMS = ["Home", "About", "Services", "Industries", "Resource", "Portfolio", "Contact"]

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-16 py-6 backdrop-blur-md bg-black/20 border-b border-white/10">
      <ul className="flex gap-10 text-sm font-bold tracking-wide text-white">
        {NAV_ITEMS.map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  )
}
