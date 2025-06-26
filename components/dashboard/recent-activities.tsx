import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, DollarSign, UserPlus, Bed, AlertTriangle } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "payment",
      user: "Rahul Sharma",
      action: "made a payment of ₹12,000",
      time: "2 minutes ago",
      icon: DollarSign,
      color: "text-green-600",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      type: "booking",
      user: "Priya Patel",
      action: "booked Room A-102, Bed B2",
      time: "15 minutes ago",
      icon: Bed,
      color: "text-blue-600",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      type: "registration",
      user: "Amit Kumar",
      action: "registered as a new student",
      time: "1 hour ago",
      icon: UserPlus,
      color: "text-orange-600",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      type: "complaint",
      user: "Sneha Reddy",
      action: "reported AC not working in Room B-201",
      time: "2 hours ago",
      icon: AlertTriangle,
      color: "text-red-600",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      type: "payment",
      user: "Vikash Singh",
      action: "payment overdue for 3 days",
      time: "3 hours ago",
      icon: Clock,
      color: "text-yellow-600",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const getActivityBadge = (type: string) => {
    switch (type) {
      case "payment":
        return <Badge className="bg-green-100 text-green-800">Payment</Badge>
      case "booking":
        return <Badge className="bg-blue-100 text-blue-800">Booking</Badge>
      case "registration":
        return <Badge className="bg-orange-100 text-orange-800">Registration</Badge>
      case "complaint":
        return <Badge className="bg-red-100 text-red-800">Complaint</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Activity</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activities
        </CardTitle>
        <CardDescription>Latest activities and updates from your properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  <span className="text-sm font-medium text-gray-900">{activity.user}</span>
                  {getActivityBadge(activity.type)}
                </div>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
