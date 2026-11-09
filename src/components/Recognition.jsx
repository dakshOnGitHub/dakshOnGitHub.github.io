import Section from './Section.jsx'

export default function Recognition({ awards = [], honors = [], num }) {
  if (!awards.length && !honors.length) return null
  return (
    <Section id="recognition" num={num} label="Recognition" title="Awards & leadership">
      <div className="recog">
        {awards.length > 0 && (
          <div data-reveal>
            <h3 className="subhead mono">Competition results</h3>
            <ol className="rows">
              {awards.map((a, i) => (
                <li className="award" key={i}>
                  <span className="award__place">{a.place}</span>
                  <span className="award__event">{a.event}</span>
                  <span className="award__where mono">{a.where}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        {honors.length > 0 && (
          <div data-reveal style={{ '--d': 1 }}>
            <h3 className="subhead mono">Honors &amp; leadership</h3>
            <ul className="rows">
              {honors.map((h) => (
                <li className="honor" key={h.title + h.detail}>
                  <span className="honor__title">{h.title}</span>
                  <span className="honor__detail">{h.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
