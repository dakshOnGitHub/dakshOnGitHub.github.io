import { ArrowRight, GitHub, LeetCode, LinkedIn } from './Icons.jsx'

function Letters({ word, offset }) {
  return [...word].map((ch, i) => (
    <span className="hero__char" style={{ '--i': offset + i }} key={i}>
      {ch}
    </span>
  ))
}

const socialIcons = { github: GitHub, leetcode: LeetCode, linkedin: LinkedIn }

export default function Hero({ profile }) {
  const { first, last } = profile.name
  const { email, links } = profile.contact
  const socials = links.filter((l) => socialIcons[l.kind])

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="wrap">
        <p className="hero__kicker mono">
          {profile.role}<span className="dot" aria-hidden="true">/</span>Class of {profile.classOf}
        </p>

        <h1 className="hero__name display" id="hero-name" aria-label={`${first} ${last}`}>
          <span className="hero__line" aria-hidden="true"><Letters word={first} offset={0} /></span>
          <span className="hero__line" aria-hidden="true"><Letters word={last} offset={first.length} /></span>
        </h1>

        <div className="hero__rule" aria-hidden="true" />

        <div className="hero__meta">
          <p className="hero__pitch">{profile.pitch}</p>

          {profile.currently?.length > 0 && (
            <div className="hero__now">
              <p className="mono hero__now-label">
                <span className="hero__now-dot" aria-hidden="true" />
                Currently
              </p>
              <ul>
                {profile.currently.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="hero__actions">
          <a className="btn btn--solid" href={`mailto:${email}`}>
            Email me <ArrowRight />
          </a>
          <ul className="hero__socials">
            {socials.map((l) => {
              const Icon = socialIcons[l.kind]
              return (
                <li key={l.kind}>
                  <a className="hero__social mono wipe" href={l.url} target="_blank" rel="noreferrer">
                    <Icon size={16} /> {l.label}
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
