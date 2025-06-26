"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react"

export function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const bookings = [
    { date: "2024-01-15", student: "Rahul Sharma", room: "A-101", type: "check-in" },
    { date: "2024-01-20", student: "Priya Patel", room: "A-102", type: "check-in" },
    { date: "2024-01-25", student: "Amit Kumar", room: "B-201", type: "check-out" },
    { date: "2024-02-01", student: "Sneha Reddy", room: "B-202", type: "check-in" },
    { date: "2024-02-10", student: "Vikash Singh", room: "C-301", type: "check-out" },
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const getBookingsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return bookings.filter((booking) => booking.date === dateStr)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Booking Calendar
            </CardTitle>
            <CardDescription>View check-ins, check-outs, and booking schedule</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold min-w-[200px] text-center">{formatDate(currentDate)}</span>
            <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center font-medium text-gray-600 text-sm">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} className="p-2 h-24"></div>
          ))}

          {days.map((day) => {
            const dayBookings = getBookingsForDate(day)
            const isToday =
              new Date().toDateString() ===
              new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()

            return (
              <div
                key={day}
                className={`p-2 h-24 border rounded-lg ${isToday ? "bg-blue-50 border-blue-200" : "border-gray-200"} hover:bg-gray-50 transition-colors`}
              >
                <div className="font-medium text-sm mb-1">{day}</div>
                <div className="space-y-1">
                  {dayBookings.map((booking, index) => (
                    <div key={index} className="text-xs">
                      <Badge
                        className={`text-xs px-1 py-0 ${
                          booking.type === "check-in" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        <User className="h-2 w-2 mr-1" />
                        {booking.type === "check-in" ? "In" : "Out"}
                      </Badge>
                      <div className="truncate mt-1">{booking.student}</div>
                      <div className="text-gray-500">{booking.room}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
