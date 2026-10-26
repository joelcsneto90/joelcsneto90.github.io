import { useEffect } from 'react'
import { AiWork } from './components/AiWork'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Credentials, Education, Projects, Skills } from './components/More'
import { ResumeButton } from './components/ResumeButton'
import { SocialLinks } from './components/SocialLinks'
import { en } from './content/en'
import { profile } from './content/profile'
import { pt } from './content/pt'
import { useLang } from './hooks/useLang'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

const year = new Date().getFullYear()

export default function App() {
  const { lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const c = lang === 'pt' ? pt : en
  useReveal()

  useEffect(() => {
    document.title = c.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
  }, [c])

  return (
    <>
      <Header c={c} theme={theme} onToggleTheme={toggleTheme} onToggleLang={toggleLang} />
      <main>
        <Hero c={c} />
        <AiWork c={c} />
        <Journey c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Education c={c} />
        <Credentials c={c} />
        <section id="contact" className="contact">
          <div className="container contact-inner">
            <h2>{c.contact.title}</h2>
            <p>{c.contact.text}</p>
            <SocialLinks className="contact-social" />
            <ResumeButton label={c.ui.downloadResume} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          © {year} {profile.name}
        </div>
      </footer>
    </>
  )
}
