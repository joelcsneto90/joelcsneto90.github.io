import { profile } from '../content/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export function SocialLinks({ className }: { className: string }) {
  return (
    <ul className={className}>
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
      <li>
        <a href={`mailto:${profile.email}`} aria-label="E-mail" title={profile.email}>
          <MailIcon />
        </a>
      </li>
    </ul>
  )
}
