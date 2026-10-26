import { useEffect } from 'react'
import { AiWork } from './components/AiWork'
import { Header } from './components/Header'
import { GitHubIcon, LinkedInIcon, MailIcon } from './components/Icons'
import { Resume } from './components/Resume'
import { ResumeButton } from './components/ResumeButton'
import { en } from './content/en'
import { profile } from './content/profile'
import { pt } from './content/pt'
import { useLang } from './hooks/useLang'
import { useTheme } from './hooks/useTheme'

const year = new Date().getFullYear()

export default function App() {
  const { lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const c = lang === 'pt' ? pt : en

  useEffect(() => {
    document.title = c.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
  }, [c])

  return (
    <>
      <Header c={c} theme={theme} onToggleTheme={toggleTheme} onToggleLang={toggleLang} />
      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="muted">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{c.hero.role}</p>
            <p className="lead">{c.hero.tagline}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#resume">
                {c.hero.ctaResume}
              </a>
              <ResumeButton label={c.ui.downloadResume} />
              <a className="btn" href="#contact">
                {c.hero.ctaContact}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>{c.about.title}</h2>
            {c.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <AiWork c={c} />
        <Resume c={c} />

        <section id="contact" className="section">
          <div className="container">
            <h2>{c.contact.title}</h2>
            <p>{c.contact.text}</p>
            <ul className="contact-links">
              <li>
                <a href={`mailto:${profile.email}`} aria-label="E-mail" title={profile.email}>
                  <MailIcon />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container muted">© {year} {profile.name}</div>
      </footer>
    </>
  )
}
