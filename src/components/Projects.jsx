import Section from './Section.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Groups render in this order; a project's `level` picks its group.
// Projects without a `level` fall into the last group.
const GROUPS = [
  { level: 'college', label: 'College projects' },
  { level: 'high school', label: 'High school projects' },
]

function Project({ p, i }) {
  return (
    <li className="project" data-reveal style={{ '--d': i }}>
      <div className="project__head">
        <h4 className="project__title">{p.title}</h4>
        <span className="mono project__status">
          {p.status ?? 'shipped'}{p.year ? ` · ${p.year}` : ''}
        </span>
      </div>
      <p className="project__summary">{p.summary}</p>
      {p.items?.length > 0 && (
        <ul className="project__items">
          {p.items.map((it) => (
            <li key={it.name}>
              <span className="project__item-name">{it.name}</span>
              <span className="project__item-desc">{it.desc}</span>
            </li>
          ))}
        </ul>
      )}
      {p.highlight && <p className="project__highlight">{p.highlight}</p>}
      <div className="project__foot">
        {p.stack?.length > 0 && (
          <ul className="project__stack mono" aria-label="Built with">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        )}
        {p.links?.length > 0 && (
          <div className="project__links">
            {p.links.map((l) => (
              <a key={l.url} className="mono wipe project__link" href={l.url} target="_blank" rel="noreferrer">
                {l.label}
                <span className="sr-only"> for {p.title} (opens in new tab)</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}

// Hidden until src/data/projects.json has at least one entry.
export default function Projects({ projects, num }) {
  if (!projects.length) return null
  const last = GROUPS[GROUPS.length - 1].level
  const groups = GROUPS.map((g) => ({
    ...g,
    items: projects.filter((p) =>
      g.level === last ? !GROUPS.slice(0, -1).some((o) => o.level === p.level) : p.level === g.level
    ),
  })).filter((g) => g.items.length)

  return (
    <Section id="projects" num={num} label="Projects" title="Selected work">
      <div className="project-groups">
        {groups.map((g) => (
          <div key={g.level}>
            <h3 className="subhead mono">{g.label}</h3>
            <ol className="projects">
              {g.items.map((p, i) => <Project p={p} i={i} key={p.title} />)}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  )
}
