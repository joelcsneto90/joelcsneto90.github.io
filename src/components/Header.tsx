import type { Content } from '../content/types'
import { profile } from '../content/profile'

interface Props {
  c: Content
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onToggleLang: () => void
}

export function Header({ c, theme, onToggleTheme, onToggleLang }: Props) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav">
          <a href="#about">{c.nav.about}</a>
          <a href="#ai">{c.nav.ai}</a>
          <a href="#resume">{c.nav.resume}</a>
          <a href="#contact">{c.nav.contact}</a>
        </nav>
        <div className="toggles">
          <button type="button" onClick={onToggleLang} aria-label={c.ui.otherLangLabel} title={c.ui.otherLangLabel}>
            {c.ui.otherLang}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? c.ui.toLight : c.ui.toDark}
            title={theme === 'dark' ? c.ui.toLight : c.ui.toDark}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </header>
  )
}
