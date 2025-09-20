"use client"

import { useState } from "react"
import { MenteeDashboard } from "./mentee-dashboard"
import { MentorDashboard } from "./mentor-dashboard"

export function DashboardContent() {
  // In a real app, this would come from authentication context
  const [userType] = useState<"mentee" | "mentor">("mentee")

  return <div>{userType === "mentee" ? <MenteeDashboard /> : <MentorDashboard />}</div>
}
