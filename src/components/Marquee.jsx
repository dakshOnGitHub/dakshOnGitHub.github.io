import { Star } from './Icons.jsx'

// Decorative band: the same skills are listed accessibly in the Lineup section.
export default function Marquee({ items }) {
  const group = (key) => (
    <div className="marquee__group" key={key}>
      {items.map((s) => (
        <span className="marquee__item" key={s}>
          {s}
          <Star size={18} />
        </span>
      ))}
    </div>
  )
  // Four identical groups; the track loops at -50% so the seam never shows.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1, 2, 3].map(group)}
      </div>
    </div>
  )
}
