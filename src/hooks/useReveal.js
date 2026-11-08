import { useEffect } from 'react'

// One observer for the whole page: anything with [data-reveal] or a
// .section__title gets .is-visible the first time it scrolls into view.
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], .section__title')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
