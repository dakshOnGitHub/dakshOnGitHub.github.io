import Section from './Section.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Hidden until src/data/projects.json has at least one entry.
export default function Projects({ projects, num }) {
  if (!projects.length) return null
  return (
    <Section id="projects" num={num} label="Projects" title="Selected work">
      <ol className="projects">
        {projects.map((p, i) => (
          <li className="project" key={p.title} data-reveal style={{ '--d': i }}>
            <div className="project__head">
              <h3 className="project__title">{p.title}</h3>
              <span className="mono project__status">
                {p.status ?? 'shipped'}{p.year ? ` · ${p.year}` : ''}
              </span>
            </div>
            <p className="project__summary">{p.summary}</p>
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
        ))}
      </ol>
    </Section>
  )
}
