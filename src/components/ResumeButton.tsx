import { profile } from '../content/profile'
import { PdfIcon } from './Icons'

export function ResumeButton({ label }: { label: string }) {
  return (
    <a className="pill pill-solid" href={profile.resumePdf} download>
      <PdfIcon />
      {label}
    </a>
  )
}
