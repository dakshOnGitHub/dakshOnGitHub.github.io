import SectionTitle from './SectionTitle.jsx'
import { Star } from './Icons.jsx'

export default function Lineup({ tiers }) {
  return (
    <section className="section" aria-labelledby="lineup">
      <div className="wrap">
        <SectionTitle id="lineup" lines={['The', 'lineup']} />
        <div className="lineup">
          {tiers.map((t, ti) => (
            <div className="tier" data-tier={Math.min(ti, 2)} key={t.stage} data-reveal style={{ '--d': ti }}>
              <p className="tier__stage mono">{t.stage}</p>
              <ul className="tier__items display">
                {t.items.map((s, si) => (
                  <li className="tier__item" key={s}>
                    {si > 0 && <Star />}
                    <span className="tier__name">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
