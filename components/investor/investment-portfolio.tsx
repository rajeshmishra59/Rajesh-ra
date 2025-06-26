import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp } from "lucide-react"

export function InvestmentPortfolio() {
  const properties = [
    {
      id: 1,
      name: "Instay Premium - Koramangala",
      investment: "₹20,00,000",
      currentValue: "₹24,50,000",
      roi: "22.5%",
      monthlyReturn: "₹37,500",
      status: "Active",
      occupancy: "92%",
      beds: 60,
    },
    {
      id: 2,
      name: "Instay Elite - HSR Layout",
      investment: "₹18,00,000",
      currentValue: "₹21,60,000",
      roi: "20.0%",
      monthlyReturn: "₹30,000",
      status: "Active",
      occupancy: "88%",
      beds: 48,
    },
    {
      id: 3,
      name: "Instay Comfort - Whitefield",
      investment: "₹12,00,000",
      currentValue: "₹14,90,000",
      roi: "24.2%",
      monthlyReturn: "₹25,000",
      status: "Active",
      occupancy: "85%",
      beds: 36,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Building2 className="h-5 w-5 mr-2" />
          Investment Portfolio
        </CardTitle>
        <CardDescription>Your property investments and performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{property.name}</h3>
                      <p className="text-sm text-gray-600">{property.beds} beds</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{property.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Investment</p>
                      <p className="font-semibold">{property.investment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Current Value</p>
                      <p className="font-semibold text-green-600">{property.currentValue}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">ROI</p>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        <p className="font-semibold text-green-600">{property.roi}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Monthly Return</p>
                      <p className="font-semibold">{property.monthlyReturn}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Occupancy</span>
                      <span className="font-medium">{property.occupancy}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-blue-600 h-2 rounded-full"
                        style={{ width: property.occupancy }}
                      ></div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
