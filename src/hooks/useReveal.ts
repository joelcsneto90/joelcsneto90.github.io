import { useEffect } from 'react'

const TARGETS = [
  '.section-title',
  '.lead',
  '.journey-intro',
  '.practices li',
  '.ai-footer',
  '.job',
  '.project',
  '.skill-group',
  '.degree',
  '.credentials ul',
  '.contact-inner > *',
].join(', ')

const STAGGER_MS = 90

// Fades and lifts elements in the first time they scroll into view.
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement
            observer.unobserve(el)
            el.style.transitionDelay = `${i * STAGGER_MS}ms`
            el.dataset.reveal = 'in'
            // Hand the element back to its own styles (e.g. hover transitions) once it is in.
            el.addEventListener(
              'transitionend',
              () => {
                el.style.transitionDelay = ''
                delete el.dataset.reveal
              },
              { once: true },
            )
          })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
      el.dataset.reveal = ''
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}
