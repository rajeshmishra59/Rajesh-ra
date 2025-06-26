import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
  color: string
}

export function KPICard({ title, value, change, trend, icon: Icon, color }: KPICardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <div className="flex items-center mt-1">
              {trend === "up" ? (
                <TrendingUp className={cn("h-4 w-4 mr-1", color)} />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1 text-red-600" />
              )}
              <span className={cn("text-sm font-medium", trend === "up" ? color : "text-red-600")}>{change}</span>
            </div>
          </div>
          <div className="p-3 rounded-full bg-gray-100">
            <Icon className={cn("h-6 w-6", color)} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
