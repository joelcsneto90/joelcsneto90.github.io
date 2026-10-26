export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="section-title">
      <h2>
        <span className="mark" aria-hidden="true" />
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
