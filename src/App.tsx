import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { WhyACD } from './components/WhyACD'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main role="main">
        <Hero />
        <Portfolio />
        <Awards />
        <About />
        <WhyACD />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  )
}

