"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Bed,
  Users,
  Clock,
  Plus,
  Filter,
  Search,
  Building,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { BedAllocationGrid } from "@/components/bookings/bed-allocation-grid"
import { BookingCalendar } from "@/components/bookings/booking-calendar"
import { Input } from "@/components/ui/input"

export default function BookingsPage() {
  const [selectedView, setSelectedView] = useState<"grid" | "calendar">("grid")

  const bookingStats = [
    {
      title: "Total Beds",
      value: "180",
      subtitle: "Across all properties",
      icon: Bed,
      color: "text-blue-600",
    },
    {
      title: "Occupied",
      value: "156",
      subtitle: "87% occupancy",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Available",
      value: "24",
      subtitle: "Ready for booking",
      icon: CheckCircle,
      color: "text-orange-600",
    },
    {
      title: "Pending",
      value: "8",
      subtitle: "Awaiting approval",
      icon: Clock,
      color: "text-yellow-600",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      studentName: "Arjun Mehta",
      room: "A-101",
      bed: "B1",
      checkIn: "2024-01-15",
      status: "Confirmed",
      rent: "₹12,000",
    },
    {
      id: 2,
      studentName: "Kavya Sharma",
      room: "B-205",
      bed: "B3",
      checkIn: "2024-01-20",
      status: "Pending",
      rent: "₹15,000",
    },
    {
      id: 3,
      studentName: "Rohit Kumar",
      room: "C-301",
      bed: "B2",
      checkIn: "2024-02-01",
      status: "Confirmed",
      rent: "₹18,000",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
          <p className="text-gray-600">Manage bed allocations and booking requests</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {bookingStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.subtitle}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View Toggle */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search by student name, room, or bed..." className="pl-10 w-80" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={selectedView === "grid" ? "default" : "outline"}
                onClick={() => setSelectedView("grid")}
                className="flex items-center"
              >
                <Building className="h-4 w-4 mr-2" />
                Grid View
              </Button>
              <Button
                variant={selectedView === "calendar" ? "default" : "outline"}
                onClick={() => setSelectedView("calendar")}
                className="flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Calendar View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {selectedView === "grid" ? <BedAllocationGrid /> : <BookingCalendar />}

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Recent Bookings
          </CardTitle>
          <CardDescription>Latest booking requests and confirmations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                    {booking.studentName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium">{booking.studentName}</div>
                    <div className="text-sm text-gray-600">
                      Room {booking.room} • Bed {booking.bed}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Check-in</div>
                    <div className="font-medium">{booking.checkIn}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Rent</div>
                    <div className="font-medium">{booking.rent}</div>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                  <div className="flex items-center space-x-2">
                    {booking.status === "Pending" && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {booking.status === "Confirmed" && (
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Waiting List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
            Waiting List
          </CardTitle>
          <CardDescription>Students waiting for bed availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  AS
                </div>
                <div>
                  <div className="font-medium">Ankit Sharma</div>
                  <div className="text-sm text-gray-600">Preferred: Room A-101</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Priority: High</Badge>
                <Button size="sm">Assign Bed</Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  NK
                </div>
                <div>
                  <div className="font-medium">Neha Kapoor</div>
                  <div className="text-sm text-gray-600">Preferred: Room B-205</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Priority: Medium</Badge>
                <Button size="sm">Assign Bed</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
