import { About } from '@/components/portfolio/about'
import { Atmosphere } from '@/components/portfolio/atmosphere'
import { BootScreen } from '@/components/portfolio/boot-screen'
import { Contact } from '@/components/portfolio/contact'
import { Hero } from '@/components/portfolio/hero'
import { Nav } from '@/components/portfolio/nav'
import { Projects } from '@/components/portfolio/projects'

export default function Page() {
  return (
    <>
      <BootScreen />
      <Atmosphere />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
