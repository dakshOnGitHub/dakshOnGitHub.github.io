import Section from './Section.jsx'

export default function Skills({ groups, num }) {
  return (
    <Section id="skills" num={num} label="Skills" title="What I work with">
      <dl className="skills">
        {groups.map((g, i) => (
          <div className="skills__row" key={g.level} data-reveal style={{ '--d': i }}>
            <dt className="mono">{g.level}</dt>
            <dd>
              <ul className="skills__items">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
