import { ArrowUp } from './Icons.jsx'

export default function Footer({ profile }) {
  const { first, last } = profile.name
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer__big display" aria-hidden="true">{first} {last}</p>
        <div className="footer__row mono">
          <span>&copy; {new Date().getFullYear()} {first} {last}</span>
          <span>Built with React + Vite. Set in Archivo &amp; IBM Plex Mono.</span>
          <a className="wipe footer__top" href="#top">Back to top <ArrowUp /></a>
        </div>
      </div>
    </footer>
  )
}
