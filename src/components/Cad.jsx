import { useState } from 'react'
import Section from './Section.jsx'

// Hidden until src/data/cad.json has at least one entry.
export default function Cad({ models, num }) {
  if (!models.length) return null
  return (
    <Section id="cad" num={num} label="CAD" title="Things I've designed">
      <ul className="cad">
        {models.map((m, i) => (
          <li className="cad__item" key={m.title} data-reveal style={{ '--d': i }}>
            <Viewer model={m} />
            <div className="cad__text">
              <h3 className="cad__title">{m.title}</h3>
              <p className="cad__summary">{m.summary}</p>
              <p className="mono cad__meta">{[m.tool, m.year].filter(Boolean).join(' · ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// Shows the still image first. The 3D view (a Fusion/Autodesk embed, or a
// local .glb via model-viewer) only loads after a click, so visitors who just
// scroll pay nothing.
function Viewer({ model }) {
  const [state, setState] = useState('idle') // idle | loading | ready | error

  async function load() {
    if (model.embed) return setState('ready')
    setState('loading')
    try {
      await import('@google/model-viewer')
      setState('ready')
    } catch {
      setState('error')
    }
  }

  if (state === 'ready' && model.embed) {
    return (
      <div className="cad__stage">
        <iframe
          className="cad__viewer"
          src={model.embed}
          title={`3D model of ${model.title}`}
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    )
  }

  if (state === 'ready') {
    return (
      <div className="cad__stage">
        <model-viewer
          src={model.model}
          poster={model.poster}
          alt={`3D model of ${model.title}`}
          camera-controls=""
          touch-action="pan-y"
          auto-rotate=""
          shadow-intensity="0.6"
          class="cad__viewer"
        />
      </div>
    )
  }

  return (
    <div className="cad__stage">
      {model.poster
        ? <img className="cad__poster" src={model.poster} alt={`Render of ${model.title}`} loading="lazy" />
        : (
          <div className="cad__poster cad__poster--empty" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
              <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
              <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
            </svg>
            <span className="mono">Interactive 3D model</span>
          </div>
        )}
      {(model.model || model.embed) && (
        <button type="button" className="btn btn--ghost cad__load" onClick={load} disabled={state === 'loading'}>
          {state === 'loading' ? 'Loading…' : state === 'error' ? 'Retry 3D view' : 'View in 3D'}
        </button>
      )}
    </div>
  )
}
