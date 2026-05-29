type BadgeProps = {
  label: string
  variant?: "default" | "accent"
}

export function Badge({ label, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-white text-black border-2 border-black",
    accent: "bg-[#ff90e8] text-black border-2 border-black",
  }

  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-bold ${variants[variant]}`}>
      {label}
    </span>
  )
}
