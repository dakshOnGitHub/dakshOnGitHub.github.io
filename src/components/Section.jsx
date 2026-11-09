// Shared section shell: a numbered label + heading in a sticky left column,
// content on the right. Collapses to a single column on narrow screens.
export default function Section({ id, num, label, title, children }) {
  const n = String(num).padStart(2, '0')
  return (
    <section className="section" aria-labelledby={id}>
      <div className="wrap section__grid">
        <header className="section__head" data-reveal>
          <p className="section__label mono">
            <span className="section__num">{n}</span> / {label}
          </p>
          <h2 className="section__title" id={id}>{title}</h2>
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
