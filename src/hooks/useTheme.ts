import { useState } from 'react'

type Theme = 'light' | 'dark'

const KEY = 'theme'

export function useTheme() {
  // index.html sets data-theme before React loads, to avoid a flash of the wrong theme.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme as Theme)

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // not persisted, still switches
    }
  }

  return { theme, toggle }
}
