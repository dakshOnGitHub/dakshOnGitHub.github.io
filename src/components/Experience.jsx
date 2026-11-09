import Section from './Section.jsx'
import Placeholder from './Placeholder.jsx'

export default function Experience({ entries, num }) {
  return (
    <Section id="experience" num={num} label="Experience" title="Education & milestones">
      <ol className="timeline">
        {entries.map((e, i) => (
          <li className="entry" data-status={e.status} key={i} data-reveal style={{ '--d': i }}>
            <span className="entry__year mono">{e.year}</span>
            <div>
              <p className="entry__title">
                {e.title}
                {e.status === 'now' && <span className="entry__now mono">Now</span>}
              </p>
              <p className="entry__place">
                {e.place}
                <Placeholder on={e.placeholder} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
