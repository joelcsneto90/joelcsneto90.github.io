import type { Content } from '../content/types'
import { Chips } from './Journey'
import { SectionTitle } from './SectionTitle'

export function Projects({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title={r.projectsTitle} />
        <div className="projects">
          {r.projects.map((p) => (
            <article key={p.name} className="project">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <Chips items={p.stack} />
              <p className="project-links">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section className="section skills-section">
      <div className="container">
        <SectionTitle title={r.skillsTitle} />
        <div className="skills">
          {r.skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <Chips items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title={r.educationTitle} />
        <div className="education">
          {r.education.map((e) => (
            <article key={e.title} className="degree">
              <p className="degree-year">{e.year}</p>
              <h3>{e.title}</h3>
              <p className="degree-school">{e.school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Credentials({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section className="section credentials-section">
      <div className="container">
        <SectionTitle title={r.credentialsTitle} />
        <div className="credentials">
          <div>
            <h3>{r.certificationsTitle}</h3>
            <ul>
              {r.certifications.map((cert) => (
                <li key={cert.code}>
                  <span className="badge">{cert.code}</span>
                  <span>{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{r.languagesTitle}</h3>
            <ul>
              {r.languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span className="muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
