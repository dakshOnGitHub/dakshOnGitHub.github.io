import Section from './Section.jsx'

export default function About({ profile, num }) {
  return (
    <Section id="about" num={num} label="About" title="About me">
      <div className="about">
        <div className="about__copy">
          {profile.about.map((p, i) => (
            <p key={i} data-reveal style={{ '--d': i }}>{p}</p>
          ))}
        </div>
        <dl className="facts" data-reveal style={{ '--d': 1 }}>
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt className="mono">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
