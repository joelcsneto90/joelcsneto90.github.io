import { profile } from '../content/profile'
import { DownloadIcon } from './Icons'

export function ResumeButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <a className={primary ? 'btn btn-primary btn-icon' : 'btn btn-icon'} href={profile.resumePdf} download>
      <DownloadIcon />
      {label}
    </a>
  )
}
