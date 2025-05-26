import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Hobbies } from './components/Hobbies'
import { Misc } from './components/Misc'

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
      <section id="misc">
        <Misc />
      </section>
    </main>
  )
} 