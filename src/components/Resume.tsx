import type { Content, Job } from '../content/types'
import { ResumeButton } from './ResumeButton'

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function JobItem({ job, c }: { job: Job; c: Content }) {
  return (
    <article className="job">
      <header className="job-head">
        <div>
          <h4>{job.role}</h4>
          <p className="job-company">{job.company}</p>
        </div>
        <p className="muted job-when">
          {job.period} · {job.location}
        </p>
      </header>
      {job.summary && <p>{job.summary}</p>}
      {job.responsibilities && (
        <>
          <h5>{c.ui.responsibilities}</h5>
          <ul>
            {job.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </>
      )}
      <h5>{c.ui.results}</h5>
      <ul className="results">
        {job.results.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <Chips items={job.stack} />
    </article>
  )
}

export function Resume({ c }: { c: Content }) {
  const r = c.resume
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <h2>{r.title}</h2>
        <p className="lead">{r.intro}</p>
        <ResumeButton label={c.ui.downloadResume} primary />

        <h3>{r.experienceTitle}</h3>
        <div className="jobs">
          {r.jobs.map((job) => (
            <JobItem key={job.company} job={job} c={c} />
          ))}
        </div>

        <h3>{r.projectsTitle}</h3>
        <div className="cards cards-2">
          {r.projects.map((p) => (
            <article key={p.name} className="card">
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <Chips items={p.stack} />
              <p className="links">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>

        <h3>{r.skillsTitle}</h3>
        <div className="skills">
          {r.skills.map((s) => (
            <div key={s.group}>
              <h5>{s.group}</h5>
              <Chips items={s.items} />
            </div>
          ))}
        </div>

        <div className="facts">
          <div>
            <h3>{r.educationTitle}</h3>
            <ul className="plain">
              {r.education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span className="muted">
                    {e.school} · {e.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{r.certificationsTitle}</h3>
            <ul className="plain">
              {r.certifications.map((cert) => (
                <li key={cert.code}>
                  <strong>{cert.code}</strong>
                  <span className="muted">{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{r.languagesTitle}</h3>
            <ul className="plain">
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
