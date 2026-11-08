import { useEffect, useState } from 'react'
import { ArrowRight, Star } from './Icons.jsx'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

function Letters({ word, offset }) {
  return [...word].map((ch, i) => (
    <span className="hero__char" style={{ '--i': offset + i }} key={i}>
      {ch}
    </span>
  ))
}

function Ticker({ items }) {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduced || paused || items.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 3200)
    return () => clearInterval(id)
  }, [reduced, paused, items.length])

  return (
    <p
      className="ticker mono"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="ticker__live" aria-hidden="true" />
      <span className="ticker__label">Now playing:</span>
      <span className="ticker__text" aria-hidden="true">
        <span key={i} className={i === 0 ? '' : 'is-in'}>{items[i]}</span>
      </span>
      <span className="sr-only">{items.join('; ')}</span>
    </p>
  )
}

export default function Hero({ profile }) {
  const { first, last } = profile.name
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="wrap hero__poster">
        <p className="hero__presents mono">Now on tour &middot; {profile.tourStart} to {profile.classOf}</p>

        <h1 className="hero__name display" id="hero-name" aria-label={`${first} ${last}`}>
          <span className="hero__line" aria-hidden="true"><Letters word={first} offset={0} /></span>
          <span className="hero__line" aria-hidden="true"><Letters word={last} offset={first.length} /></span>
        </h1>

        <div className="hero__rule" aria-hidden="true">
          <span />
          <Star size={22} className="" />
          <span />
        </div>

        <p className="hero__role mono">
          {profile.role}<span className="dot" aria-hidden="true">/</span>Class of {profile.classOf}
        </p>

        <Ticker items={profile.nowPlaying} />

        <div className="hero__actions">
          <a className="btn btn--solid" href={`mailto:${profile.contact.email}`}>
            Book a chat <ArrowRight />
          </a>
          <a className="btn btn--ghost" href="#lineup">See the lineup</a>
        </div>

        <div className="stamp" aria-hidden="true">
          <div>
            Tour started
            <b>{profile.tourStart}</b>
            Hiring interns?
          </div>
        </div>
      </div>
    </section>
  )
}
