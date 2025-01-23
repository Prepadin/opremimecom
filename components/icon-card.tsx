import type { LucideIcon } from "lucide-react"

interface IconCardProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function IconCard({ icon: Icon, title, className = "" }: IconCardProps) {
  return (
    <div className={`flex flex-col items-center text-center space-y-2 ${className}`}>
      <div className="p-4">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <p className="text-sm text-white font-medium max-w-[120px] leading-tight">{title}</p>
    </div>
  )
}

