import profile from './data/profile.json'
import projects from './data/projects.json'
import skills from './data/skills.json'
import timeline from './data/timeline.json'
import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Lineup from './components/Lineup.jsx'
import TourDates from './components/TourDates.jsx'
import BoxOffice from './components/BoxOffice.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

const allSkills = skills.tiers.flatMap((t) => t.items)

export default function App() {
  useReveal([projects.length])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopBar profile={profile} showProjects={projects.length > 0} />
      <main id="main">
        <Hero profile={profile} />
        <Marquee items={allSkills} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Lineup tiers={skills.tiers} />
        <TourDates dates={timeline} />
        <BoxOffice contact={profile.contact} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
