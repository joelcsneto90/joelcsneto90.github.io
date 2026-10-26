import { useEffect, useState } from 'react'
import type { Lang } from '../content/types'

const KEY = 'lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // storage blocked: fall back to the browser language
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function useLang() {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  // Only an explicit choice is saved, so visitors without one keep following the browser.
  const toggle = () => {
    const next: Lang = lang === 'pt' ? 'en' : 'pt'
    setLang(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // not persisted, still switches
    }
  }

  return { lang, toggle }
}
