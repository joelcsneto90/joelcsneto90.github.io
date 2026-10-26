import type { Content } from '../content/types'
import { profile } from '../content/profile'
import { GitHubIcon } from './Icons'
import { SectionTitle } from './SectionTitle'

export function AiWork({ c }: { c: Content }) {
  return (
    <section id="ai" className="section ai">
      <div className="container">
        <SectionTitle title={c.ai.title} subtitle={c.ai.subtitle} />
        <p className="lead">{c.ai.intro}</p>
        <ol className="practices">
          {c.ai.practices.map((p, i) => (
            // Index keys keep the same nodes across a language switch, so revealed items stay revealed.
            <li key={i}>
              <span className="practice-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="ai-footer">
          <a className="pill" href={profile.aiRepo} target="_blank" rel="noreferrer">
            <GitHubIcon />
            {c.ai.repoLabel} ↗
          </a>
          <span className="muted">{c.ai.footnote}</span>
        </p>
      </div>
    </section>
  )
}
