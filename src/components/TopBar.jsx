import { Star, SunMoon } from './Icons.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function TopBar({ profile, showProjects }) {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  const initials = profile.name.first[0] + profile.name.last[0]

  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <a className="topbar__mark" href="#top" aria-label={`${profile.name.first} ${profile.name.last}, back to top`}>
          <Star size={14} />
          <span className="mono">{initials}</span>
          <span className="mono topbar__tour">
            {profile.tourStart}&ndash;{profile.classOf} Tour
          </span>
        </a>
        <nav className="topbar__nav" aria-label="Sections">
          <ul className="topbar__links">
            <li><a className="mono wipe" href="#about">About</a></li>
            {showProjects && <li><a className="mono wipe" href="#setlist">Projects</a></li>}
            <li><a className="mono wipe" href="#lineup">Skills</a></li>
            <li><a className="mono wipe" href="#tour">Timeline</a></li>
            <li><a className="mono wipe" href="#book">Contact</a></li>
          </ul>
          <button
            type="button"
            className="toggle"
            data-mode={theme}
            onClick={toggle}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
          >
            <SunMoon />
          </button>
        </nav>
      </div>
    </header>
  )
}
