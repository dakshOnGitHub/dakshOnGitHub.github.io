import { ArrowUp } from './Icons.jsx'

export default function Footer({ profile }) {
  const { first, last } = profile.name
  return (
    <footer className="footer">
      <div className="wrap footer__row mono">
        <span>&copy; {new Date().getFullYear()} {first} {last}</span>
        <span className="footer__built">Built with React + Vite</span>
        <a className="wipe footer__top" href="#top">Back to top <ArrowUp /></a>
      </div>
    </footer>
  )
}
