import SectionTitle from './SectionTitle.jsx'

export default function About({ profile }) {
  const { awards = [], honors = [] } = profile
  return (
    <section className="section" aria-labelledby="about">
      <div className="wrap">
        <SectionTitle id="about" lines={['The', 'headliner']} />
        <div className="about">
          <div className="about__copy">
            {profile.about.map((p, i) => (
              <p key={i} data-reveal style={{ '--d': i }}>{p}</p>
            ))}
          </div>
          <dl className="facts" data-reveal style={{ '--d': 2 }}>
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt className="mono">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {(awards.length > 0 || honors.length > 0) && (
          <div className="accolades">
            {awards.length > 0 && (
              <div data-reveal>
                <h3 className="accolades__title display">Competition results</h3>
                <ol className="awards">
                  {awards.map((a, i) => (
                    <li className="award" key={i} data-reveal style={{ '--d': i }}>
                      <span className="award__place display">{a.place}</span>
                      <span className="award__event">{a.event}</span>
                      <span className="award__where mono">{a.where}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {honors.length > 0 && (
              <div data-reveal style={{ '--d': 1 }}>
                <h3 className="accolades__title display">Honors &amp; leadership</h3>
                <ul className="honors">
                  {honors.map((h) => (
                    <li key={h.title + h.detail}>
                      <span className="honors__title">{h.title}</span>
                      <span className="honors__detail mono">{h.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
