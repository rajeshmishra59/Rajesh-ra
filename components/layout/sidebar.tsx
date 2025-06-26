"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Bed,
  DollarSign,
  Building,
  FileText,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X,
  Zap,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { name: "Students", href: "/students", icon: Users },
  { name: "Bookings", href: "/bookings", icon: Bed },
  { name: "Finances", href: "/finances", icon: DollarSign },
  { name: "Properties", href: "/properties", icon: Building },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Complaints", href: "/complaints", icon: AlertTriangle },
  { name: "Investors", href: "/dashboard/investor", icon: TrendingUp },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Instay
              </span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} className="p-2">
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  isCollapsed && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link href="/settings">
          <div
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
              isCollapsed && "justify-center",
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>Settings</span>}
          </div>
        </Link>
        <Button
          variant="ghost"
          className={cn("w-full justify-start text-gray-700 hover:bg-gray-100", isCollapsed && "justify-center px-2")}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  )
}
