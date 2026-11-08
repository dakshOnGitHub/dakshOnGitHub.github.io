import SectionTitle from './SectionTitle.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Hidden until src/data/projects.json has at least one entry.
export default function Projects({ projects }) {
  if (!projects.length) return null
  return (
    <section className="section" aria-labelledby="setlist">
      <div className="wrap">
        <SectionTitle id="setlist" lines={['The', 'setlist']} />
        <ol className="setlist">
          {projects.map((p, i) => (
            <li className="song" key={p.title} data-reveal style={{ '--d': i }}>
              <span className="song__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="song__title display">{p.title}</h3>
                <p className="song__summary">{p.summary}</p>
                {p.highlight && <p className="song__highlight">{p.highlight}</p>}
                {p.stack?.length > 0 && (
                  <ul className="song__stack mono" aria-label="Built with">
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                )}
              </div>
              <div className="song__meta">
                <span className="mono song__status">
                  {p.status ?? 'shipped'}{p.year ? ` · ${p.year}` : ''}
                </span>
                {p.links?.length > 0 && (
                  <div className="song__links">
                    {p.links.map((l) => (
                      <a key={l.url} className="mono wipe song__link" href={l.url} target="_blank" rel="noreferrer">
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
      </div>
    </section>
  )
}
