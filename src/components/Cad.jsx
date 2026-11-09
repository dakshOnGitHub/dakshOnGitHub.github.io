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

// Shows the still image first. The 3D library (~1MB) and the model file
// only download after a click, so visitors who just scroll pay nothing.
function Viewer({ model }) {
  const [state, setState] = useState('idle') // idle | loading | ready | error

  async function load() {
    setState('loading')
    try {
      await import('@google/model-viewer')
      setState('ready')
    } catch {
      setState('error')
    }
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
        : <div className="cad__poster cad__poster--empty mono" aria-hidden="true">{model.title}</div>}
      {model.model && (
        <button type="button" className="btn btn--ghost cad__load" onClick={load} disabled={state === 'loading'}>
          {state === 'loading' ? 'Loading…' : state === 'error' ? 'Retry 3D view' : 'View in 3D'}
        </button>
      )}
    </div>
  )
}
