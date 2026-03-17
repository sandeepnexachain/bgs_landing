import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#5B4B8A] via-[#7B5B8A] to-[#8B6B9A]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  )
}
