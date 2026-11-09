import profile from './data/profile.json'
import projects from './data/projects.json'
import skills from './data/skills.json'
import timeline from './data/timeline.json'
import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Recognition from './components/Recognition.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

const hasRecognition = (profile.awards?.length ?? 0) + (profile.honors?.length ?? 0) > 0

// Section order lives here; numbers and nav follow automatically, so hidden
// sections (no projects yet) never leave a gap in the numbering.
const sections = [
  { id: 'about', label: 'About', show: true },
  { id: 'recognition', label: 'Recognition', show: hasRecognition, nav: false },
  { id: 'projects', label: 'Projects', show: projects.length > 0 },
  { id: 'skills', label: 'Skills', show: true },
  { id: 'experience', label: 'Experience', show: true },
  { id: 'contact', label: 'Contact', show: true },
].filter((s) => s.show)

const num = Object.fromEntries(sections.map((s, i) => [s.id, i + 1]))
const nav = sections.filter((s) => s.nav !== false)

export default function App() {
  useReveal([projects.length])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopBar profile={profile} nav={nav} />
      <main id="main">
        <Hero profile={profile} />
        <About profile={profile} num={num.about} />
        <Recognition awards={profile.awards} honors={profile.honors} num={num.recognition} />
        <Projects projects={projects} num={num.projects} />
        <Skills groups={skills.groups} num={num.skills} />
        <Experience entries={timeline} num={num.experience} />
        <Contact contact={profile.contact} num={num.contact} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
