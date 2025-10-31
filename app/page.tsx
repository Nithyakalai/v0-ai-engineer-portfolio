"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="bg-background">
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
