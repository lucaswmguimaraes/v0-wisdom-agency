import { cn } from "@/lib/utils"

interface BadgeProps {
  tone?: "neutral" | "info" | "success"
  children: React.ReactNode
  className?: string
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-secondary text-secondary-foreground": tone === "neutral",
          "bg-primary/10 text-primary border border-primary/20": tone === "info",
          "bg-green-500/10 text-green-400 border border-green-500/20": tone === "success",
        },
        className
      )}
    >
      {children}
    </span>
  )
}
