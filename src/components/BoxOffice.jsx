import { useRef, useState } from 'react'
import SectionTitle from './SectionTitle.jsx'
import Placeholder from './Placeholder.jsx'
import { ArrowUpRight, Copy, FileText, GitHub, LinkedIn } from './Icons.jsx'

const icons = { github: GitHub, linkedin: LinkedIn, resume: FileText }

export default function BoxOffice({ contact }) {
  const [copied, setCopied] = useState('')
  const timer = useRef(0)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied('Copied to clipboard')
    } catch {
      setCopied('Copy failed. Select the address above.')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(''), 2400)
  }

  return (
    <section className="section" aria-labelledby="book">
      <div className="wrap">
        <SectionTitle id="book" lines={['Book', 'Daksh']} />
        <p className="section__intro">
          Hiring for an internship, building something, or want to talk code? Email is the fastest way to reach me.
        </p>
        <div className="boxoffice">
          <div data-reveal>
            <a className="boxoffice__email" href={`mailto:${contact.email}`}>
              {/* Break before the @ on narrow screens instead of mid-word */}
              <span>{contact.email.split('@')[0]}</span>
              <wbr />
              <span>@{contact.email.split('@')[1]}</span>
            </a>
            <div className="boxoffice__copy">
              <button type="button" className="btn btn--ghost" onClick={copy}>
                <Copy /> Copy email
              </button>
              <span className="mono boxoffice__copied" role="status" aria-live="polite">{copied}</span>
            </div>
          </div>
          <ul className="tickets" data-reveal style={{ '--d': 1 }}>
            {contact.links.map((l) => {
              const Icon = icons[l.kind] ?? ArrowUpRight
              const external = /^https?:/.test(l.url)
              return (
                <li key={l.kind}>
                  <a
                    className="ticket"
                    href={l.url}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <span className="ticket__name">
                      <Icon />
                      {l.label}
                      <Placeholder on={l.placeholder} />
                    </span>
                    <ArrowUpRight className="ticket__arrow" />
                    {external && <span className="sr-only">(opens in new tab)</span>}
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
