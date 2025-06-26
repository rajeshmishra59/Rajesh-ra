"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", occupancy: 82 },
  { month: "Feb", occupancy: 85 },
  { month: "Mar", occupancy: 88 },
  { month: "Apr", occupancy: 90 },
  { month: "May", occupancy: 87 },
  { month: "Jun", occupancy: 87 },
]

export function OccupancyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Occupancy Rate</CardTitle>
        <CardDescription>Monthly occupancy percentage across all properties</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Area type="monotone" dataKey="occupancy" stroke="#3498DB" fill="url(#colorOccupancy)" strokeWidth={2} />
            <defs>
              <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3498DB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3498DB" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
