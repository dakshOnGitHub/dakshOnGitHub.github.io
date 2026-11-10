import { useRef, useState } from 'react'
import Section from './Section.jsx'
import Placeholder from './Placeholder.jsx'
import { ArrowUpRight, Copy, GitHub, LinkedIn } from './Icons.jsx'

const icons = { github: GitHub, linkedin: LinkedIn }

export default function Contact({ contact, num }) {
  const [copied, setCopied] = useState('')
  const timer = useRef(0)
  const [user, domain] = contact.email.split('@')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied('Copied')
    } catch {
      setCopied('Copy failed. Select the address above.')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(''), 2400)
  }

  return (
    <Section id="contact" num={num} label="Contact" title="Get in touch">
      <p className="lead" data-reveal>
        Hiring for an internship, building something, or want to talk code? Email is the fastest way to reach me.
      </p>
      <div className="contact" data-reveal style={{ '--d': 1 }}>
        <a className="contact__email" href={`mailto:${contact.email}`}>
          {/* Break before the @ on narrow screens instead of mid-word */}
          <span>{user}</span><wbr /><span>@{domain}</span>
        </a>
        <div className="contact__copy">
          <button type="button" className="btn btn--ghost btn--sm" onClick={copy}>
            <Copy /> Copy email
          </button>
          <span className="mono contact__copied" role="status" aria-live="polite">{copied}</span>
        </div>
      </div>
      <ul className="links" data-reveal style={{ '--d': 2 }}>
        {contact.links.map((l) => {
          const Icon = icons[l.kind] ?? ArrowUpRight
          return (
            <li key={l.kind}>
              <a
                className="link-row"
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-row__name">
                  <Icon size={20} />
                  {l.label}
                  <Placeholder on={l.placeholder} />
                </span>
                <ArrowUpRight className="link-row__arrow" size={18} />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
