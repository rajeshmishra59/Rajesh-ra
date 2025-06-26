import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Bed,
  DollarSign,
  TrendingUp,
  Plus,
  Receipt,
  UserPlus,
  Calendar,
  AlertCircle,
  Building,
} from "lucide-react"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { OccupancyChart } from "@/components/charts/occupancy-chart"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { KPICard } from "@/components/dashboard/kpi-card"

export default function AdminDashboard() {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "₹2,45,000",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Occupancy Rate",
      value: "87%",
      change: "+5.2%",
      trend: "up" as const,
      icon: Bed,
      color: "text-blue-600",
    },
    {
      title: "Active Students",
      value: "156",
      change: "+8",
      trend: "up" as const,
      icon: Users,
      color: "text-orange-600",
    },
    {
      title: "Profit Margin",
      value: "34%",
      change: "-2.1%",
      trend: "down" as const,
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const quickActions = [
    { label: "Add Student", icon: UserPlus, color: "bg-blue-500" },
    { label: "New Booking", icon: Calendar, color: "bg-green-500" },
    { label: "Add Expense", icon: Receipt, color: "bg-orange-500" },
    { label: "Manage Properties", icon: Building, color: "bg-purple-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-600 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            All Systems Operational
          </Badge>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
          <CardDescription>Frequently used actions for efficient management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex-col space-y-2 hover:shadow-md transition-shadow"
              >
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <OccupancyChart />
      </div>

      {/* Recent Activities */}
      <RecentActivities />

      {/* Alerts & Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
            Important Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium">5 students have pending payments</span>
              </div>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium">Maintenance scheduled for Building A</span>
              </div>
              <Button size="sm" variant="outline">
                Schedule
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium">3 new booking requests pending approval</span>
              </div>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
