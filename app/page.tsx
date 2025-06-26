import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  // Redirect based on user role
  switch (session.user.role) {
    case "admin":
      redirect("/dashboard/admin")
    case "investor":
      redirect("/dashboard/investor")
    case "manager":
      redirect("/dashboard/manager")
    case "student":
      redirect("/dashboard/student")
    default:
      redirect("/auth/login")
  }
}
