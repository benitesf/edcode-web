type SectionTitleProps = {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-black tracking-tight text-black">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[var(--text-muted)] text-sm font-medium">{subtitle}</p>
      )}
      <div className="mt-4 h-0.5 bg-black" />
    </div>
  )
}
