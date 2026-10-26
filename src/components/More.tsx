import type { Content } from '../content/types'
import { Chips } from './Journey'
import { SectionTitle } from './SectionTitle'

export function More({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section className="section more">
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

        <SectionTitle title={r.skillsTitle} />
        <div className="skills">
          {r.skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <Chips items={s.items} />
            </div>
          ))}
        </div>

        <div className="facts">
          <div>
            <h3>{r.educationTitle}</h3>
            <ul>
              {r.education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>
                    {e.school} · {e.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{r.certificationsTitle}</h3>
            <ul>
              {r.certifications.map((cert) => (
                <li key={cert.code}>
                  <strong>{cert.code}</strong>
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
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
