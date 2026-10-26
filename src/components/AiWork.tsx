import type { Content } from '../content/types'
import { profile } from '../content/profile'

export function AiWork({ c }: { c: Content }) {
  return (
    <section id="ai" className="section">
      <div className="container">
        <h2>{c.ai.title}</h2>
        <p className="lead">{c.ai.intro}</p>
        <div className="cards">
          {c.ai.practices.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <p className="ai-footer">
          <a href={profile.aiRepo} target="_blank" rel="noreferrer">
            {c.ai.repoLabel} →
          </a>
          <span className="muted">{c.ai.footnote}</span>
        </p>
      </div>
    </section>
  )
}
