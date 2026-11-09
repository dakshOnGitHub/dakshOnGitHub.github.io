import { SunMoon } from './Icons.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function TopBar({ profile, nav }) {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  const { first, last } = profile.name

  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <a className="topbar__mark" href="#top" aria-label={`${first} ${last}, back to top`}>
          <span className="topbar__monogram" aria-hidden="true">{first[0]}{last[0]}</span>
          <span className="topbar__name">{first} {last}</span>
        </a>
        <nav className="topbar__nav" aria-label="Sections">
          <ul className="topbar__links">
            {nav.map((s) => (
              <li key={s.id}><a className="wipe" href={`#${s.id}`}>{s.label}</a></li>
            ))}
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
