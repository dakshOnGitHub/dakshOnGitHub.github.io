import { useCallback, useEffect, useState } from 'react'

function read() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(read)

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let stored = null
      try { stored = localStorage.getItem('theme') } catch { /* storage blocked */ }
      if (!stored) apply(mq.matches ? 'dark' : 'light', false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const apply = useCallback((next, persist = true) => {
    document.documentElement.setAttribute('data-theme', next)
    if (persist) {
      try { localStorage.setItem('theme', next) } catch { /* storage blocked */ }
    }
    setTheme(next)
  }, [])

  const toggle = useCallback(() => apply(read() === 'dark' ? 'light' : 'dark'), [apply])
  return { theme, toggle }
}
