import type { Content, Job } from '../content/types'
import { SectionTitle } from './SectionTitle'

// Renders **marked** parts of a string as highlights.
function Highlighted({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function JobCard({ job, c }: { job: Job; c: Content }) {
  return (
    <article className="job">
      <div className="job-meta">
        <p className="job-period">{job.period}</p>
        <h3>{job.role}</h3>
        <p className="job-company">
          {job.url ? (
            <a href={job.url} target="_blank" rel="noreferrer">
              {job.company} ↗
            </a>
          ) : (
            job.company
          )}
        </p>
        <p className="job-location">{job.location}</p>
      </div>
      <div className="job-body">
        {job.summary && <p className="job-summary">{job.summary}</p>}
        {job.responsibilities && (
          <>
            <h4>{c.ui.responsibilities}</h4>
            <ul>
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        )}
        <h4>{c.ui.results}</h4>
        <ul className="results">
          {job.results.map((r) => (
            <li key={r}>
              <Highlighted text={r} />
            </li>
          ))}
        </ul>
        <Chips items={job.stack} />
      </div>
    </article>
  )
}

export function Journey({ c }: { c: Content }) {
  return (
    <section id="journey" className="section journey">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="container journey-inner">
        <SectionTitle title={c.resume.title} subtitle={c.resume.subtitle} />
        <p className="journey-intro">{c.resume.intro}</p>
        <div className="jobs">
          {c.resume.jobs.map((job) => (
            <JobCard key={job.company} job={job} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
