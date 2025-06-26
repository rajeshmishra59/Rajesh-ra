"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Bed, User, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function BedAllocationGrid() {
  const [selectedProperty, setSelectedProperty] = useState("property-a")

  const properties = [
    { id: "property-a", name: "Instay Premium - Koramangala", floors: 3 },
    { id: "property-b", name: "Instay Elite - HSR Layout", floors: 4 },
    { id: "property-c", name: "Instay Comfort - Whitefield", floors: 2 },
  ]

  const rooms = [
    {
      id: "A-101",
      floor: 1,
      beds: [
        { id: "B1", status: "occupied", student: "Rahul S." },
        { id: "B2", status: "occupied", student: "Amit K." },
        { id: "B3", status: "available", student: null },
      ],
    },
    {
      id: "A-102",
      floor: 1,
      beds: [
        { id: "B1", status: "occupied", student: "Priya P." },
        { id: "B2", status: "maintenance", student: null },
        { id: "B3", status: "occupied", student: "Sneha R." },
      ],
    },
    {
      id: "A-103",
      floor: 1,
      beds: [
        { id: "B1", status: "available", student: null },
        { id: "B2", status: "available", student: null },
        { id: "B3", status: "reserved", student: "Vikash S." },
      ],
    },
    {
      id: "B-201",
      floor: 2,
      beds: [
        { id: "B1", status: "occupied", student: "Ankit S." },
        { id: "B2", status: "occupied", student: "Neha K." },
        { id: "B3", status: "available", student: null },
      ],
    },
    {
      id: "B-202",
      floor: 2,
      beds: [
        { id: "B1", status: "available", student: null },
        { id: "B2", status: "occupied", student: "Ravi M." },
        { id: "B3", status: "occupied", student: "Kavya S." },
      ],
    },
    {
      id: "B-203",
      floor: 2,
      beds: [
        { id: "B1", status: "occupied", student: "Arjun M." },
        { id: "B2", status: "available", student: null },
        { id: "B3", status: "available", student: null },
      ],
    },
  ]

  const getBedStatusColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-red-100 border-red-300 text-red-800"
      case "available":
        return "bg-green-100 border-green-300 text-green-800"
      case "reserved":
        return "bg-yellow-100 border-yellow-300 text-yellow-800"
      case "maintenance":
        return "bg-gray-100 border-gray-300 text-gray-800"
      default:
        return "bg-gray-100 border-gray-300 text-gray-800"
    }
  }

  const getBedIcon = (status: string) => {
    switch (status) {
      case "occupied":
        return <User className="h-4 w-4" />
      case "available":
        return <Plus className="h-4 w-4" />
      case "reserved":
        return <User className="h-4 w-4" />
      case "maintenance":
        return <Bed className="h-4 w-4" />
      default:
        return <Bed className="h-4 w-4" />
    }
  }

  const groupedRooms = rooms.reduce(
    (acc, room) => {
      if (!acc[room.floor]) {
        acc[room.floor] = []
      }
      acc[room.floor].push(room)
      return acc
    },
    {} as Record<number, typeof rooms>,
  )

  return (
    <div className="space-y-6">
      {/* Property Selector */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Building className="h-5 w-5 text-gray-600" />
            <div className="flex space-x-2">
              {properties.map((property) => (
                <Button
                  key={property.id}
                  variant={selectedProperty === property.id ? "default" : "outline"}
                  onClick={() => setSelectedProperty(property.id)}
                  className="text-sm"
                >
                  {property.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Bed Status Legend</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                <span className="text-sm">Occupied</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                <span className="text-sm">Reserved</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                <span className="text-sm">Maintenance</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Floor Layout */}
      {Object.entries(groupedRooms).map(([floor, floorRooms]) => (
        <Card key={floor}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Floor {floor}
            </CardTitle>
            <CardDescription>Room and bed allocation for floor {floor}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {floorRooms.map((room) => (
                <Card key={room.id} className="border-2">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Room {room.id}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      {room.beds.map((bed) => (
                        <div
                          key={bed.id}
                          className={cn(
                            "p-3 rounded-lg border-2 text-center cursor-pointer hover:shadow-md transition-shadow",
                            getBedStatusColor(bed.status),
                          )}
                        >
                          <div className="flex flex-col items-center space-y-1">
                            {getBedIcon(bed.status)}
                            <span className="text-xs font-medium">{bed.id}</span>
                            {bed.student && <span className="text-xs truncate w-full">{bed.student}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
