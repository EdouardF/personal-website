import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Hobbies } from './components/Hobbies'
import { Misc } from './components/Misc'
import { Navigation } from './components/Navigation'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      <section id="hero" className="parallax-section">
        <Hero />
      </section>

      <section id="about" className="parallax-section">
        <About />
      </section>

      <section id="experience" className="parallax-section">
        <Experience />
      </section>

      <section id="hobbies" className="parallax-section">
        <Hobbies />
      </section>

      <section id="misc" className="parallax-section">
        <Misc />
      </section>
    </main>
  )
} 