import type { LucideIcon } from "lucide-react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

export function StepCard({ number, title, description, icon: Icon }: StepCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center space-y-4">
      <div className="text-violet-600">
        <Icon className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Korak {number}</h3>
        <p className="text-sm text-gray-500 max-w-[200px]">{description}</p>
      </div>
    </div>
  )
}

