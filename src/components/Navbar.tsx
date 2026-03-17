import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const NAV_ITEMS = ["Home", "About", "Services", "Industries", "Resource", "Portfolio", "Contact"]

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (item: string) => {
    setOpen(false)
    if (item === "Resource") {
      navigate("/resource")
      return
    }
    // If not on home page, go home first then scroll
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => scrollTo(item.toLowerCase()), 100)
    } else {
      scrollTo(item.toLowerCase())
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-16 py-4 md:py-6">
        {/* Logo */}
        <button onClick={() => navigate("/")}>
          <img src="/image.png" alt="BGS Ecosystem" className="h-20 w-auto object-contain scale-150 origin-left" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 text-sm font-bold tracking-wide text-white">
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              onClick={() => handleNav(item)}
              className={`cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                item === "Resource" && location.pathname === "/resource" ? "text-red-400" : ""
              }`}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li
                key={item}
                onClick={() => handleNav(item)}
                className={`cursor-pointer text-sm font-bold tracking-wide hover:text-red-400 transition-colors duration-200 py-2 border-b border-white/5 ${
                  item === "Resource" && location.pathname === "/resource" ? "text-red-400" : "text-white/70"
                }`}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
