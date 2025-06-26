"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { quarter: "Q1 2023", roi: 12.5, target: 15 },
  { quarter: "Q2 2023", roi: 14.2, target: 15 },
  { quarter: "Q3 2023", roi: 16.8, target: 15 },
  { quarter: "Q4 2023", roi: 18.1, target: 15 },
  { quarter: "Q1 2024", roi: 17.9, target: 18 },
  { quarter: "Q2 2024", roi: 18.5, target: 18 },
]

export function ROIChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Performance</CardTitle>
        <CardDescription>Quarterly return on investment vs targets</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis domain={[0, 25]} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Line type="monotone" dataKey="roi" stroke="#FF6B35" strokeWidth={3} name="Actual ROI" />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#2C3E50"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Target ROI"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
