import type { Content } from '../content/types'
import { profile } from '../content/profile'
import { ResumeButton } from './ResumeButton'
import { SocialLinks } from './SocialLinks'

export function Hero({ c }: { c: Content }) {
  return (
    <section id="top" className="hero">
      <div className="hero-panel" aria-hidden="true" />
      <div className="hero-inner">
        <aside className="profile-card">
          <img src={profile.photo} alt={profile.name} width="160" height="160" />
          <p className="profile-name">{profile.name}</p>
          <span className="profile-rule" aria-hidden="true" />
          <p className="profile-role">{c.hero.role}</p>
          <p className="profile-location">{profile.location}</p>
          <SocialLinks className="profile-social" />
        </aside>
        <div className="hero-text">
          <h1>{c.hero.greeting}</h1>
          <p className="hero-tagline">{c.hero.tagline}</p>
          <div className="actions">
            <ResumeButton label={c.ui.downloadResume} />
            <a className="pill" href="#journey">
              {c.hero.ctaJourney}
            </a>
          </div>
          {c.about.paragraphs.map((p) => (
            <p key={p} className="hero-about">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
