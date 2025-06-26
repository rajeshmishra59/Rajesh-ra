import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, PieChart, Calendar, Download, Calculator, Building2, Target } from "lucide-react"
import { ROIChart } from "@/components/charts/roi-chart"
import { ProfitDistributionChart } from "@/components/charts/profit-distribution-chart"
import { InvestmentPortfolio } from "@/components/investor/investment-portfolio"

export default function InvestorDashboard() {
  const investmentMetrics = [
    {
      title: "Total Investment",
      value: "₹50,00,000",
      change: "+₹5,00,000",
      trend: "up" as const,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Current ROI",
      value: "18.5%",
      change: "+2.3%",
      trend: "up" as const,
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Monthly Returns",
      value: "₹92,500",
      change: "+₹8,500",
      trend: "up" as const,
      icon: PieChart,
      color: "text-orange-600",
    },
    {
      title: "Properties",
      value: "3",
      change: "+1",
      trend: "up" as const,
      icon: Building2,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Investor Dashboard</h1>
          <p className="text-gray-600">Track your investments and returns</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center">
            <Calculator className="h-4 w-4 mr-2" />
            ROI Calculator
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Investment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investmentMetrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className={`h-4 w-4 mr-1 ${metric.color}`} />
                    <span className={`text-sm font-medium ${metric.color}`}>{metric.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Portfolio */}
      <InvestmentPortfolio />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ROIChart />
        <ProfitDistributionChart />
      </div>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Performance Summary
          </CardTitle>
          <CardDescription>Your investment performance over the last 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">₹11,10,000</div>
              <div className="text-sm text-gray-600">Total Returns</div>
              <Badge className="mt-2 bg-green-100 text-green-800">+22.2%</Badge>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">₹61,10,000</div>
              <div className="text-sm text-gray-600">Portfolio Value</div>
              <Badge className="mt-2 bg-blue-100 text-blue-800">+18.5%</Badge>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">24 months</div>
              <div className="text-sm text-gray-600">Investment Period</div>
              <Badge className="mt-2 bg-orange-100 text-orange-800">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Distributions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Profit Distributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">Q4 2024 Distribution</div>
                <div className="text-sm text-gray-600">Expected: ₹2,75,000</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Due Date</div>
                <div className="font-medium">Jan 15, 2025</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">Annual Bonus Distribution</div>
                <div className="text-sm text-gray-600">Expected: ₹1,25,000</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Due Date</div>
                <div className="font-medium">Mar 31, 2025</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
