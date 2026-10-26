import { profile } from '../content/profile'
import { DownloadIcon } from './Icons'

export function ResumeButton({ label }: { label: string }) {
  return (
    <a className="pill pill-solid" href={profile.resumePdf} download>
      <DownloadIcon />
      {label}
    </a>
  )
}
