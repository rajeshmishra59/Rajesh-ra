"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 185000, expenses: 120000 },
  { month: "Feb", revenue: 195000, expenses: 125000 },
  { month: "Mar", revenue: 210000, expenses: 135000 },
  { month: "Apr", revenue: 225000, expenses: 140000 },
  { month: "May", revenue: 240000, expenses: 145000 },
  { month: "Jun", revenue: 245000, expenses: 150000 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue vs Expenses</CardTitle>
        <CardDescription>Monthly revenue and expense comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            <Line type="monotone" dataKey="revenue" stroke="#FF6B35" strokeWidth={3} name="Revenue" />
            <Line type="monotone" dataKey="expenses" stroke="#2C3E50" strokeWidth={3} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
