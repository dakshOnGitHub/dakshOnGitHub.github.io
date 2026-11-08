import { useEffect, useRef } from 'react'
import SectionTitle from './SectionTitle.jsx'
import Placeholder from './Placeholder.jsx'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

const statusLabel = { played: 'Played', now: 'Now', upcoming: 'Upcoming' }

export default function TourDates({ dates }) {
  const listRef = useRef(null)
  const reduced = useReducedMotion()

  // The rail fills with accent as the list scrolls up past 60% of the viewport.
  useEffect(() => {
    const el = listRef.current
    if (!el) return
    if (reduced) {
      el.style.setProperty('--progress', '1')
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const mid = window.innerHeight * 0.6
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height))
      el.style.setProperty('--progress', p.toFixed(3))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  return (
    <section className="section" aria-labelledby="tour">
      <div className="wrap">
        <SectionTitle id="tour" lines={['Tour', 'dates']} />
        <div className="tour" ref={listRef}>
          <div className="tour__rail" aria-hidden="true"><span /></div>
          <ol>
            {dates.map((d, i) => (
              <li className="date" data-status={d.status} key={i} data-reveal style={{ '--d': i }}>
                <span className="date__year display">{d.year}</span>
                <div>
                  <p className="date__title">{d.title}</p>
                  <p className="date__place mono">
                    {d.place}
                    <Placeholder on={d.placeholder} />
                  </p>
                </div>
                <span className="date__status mono">{statusLabel[d.status] ?? d.status}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
