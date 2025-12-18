import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import TechnicalSkills from "../components/TechnicalSkills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Layout>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </Layout>
  )
}
