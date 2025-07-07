import { Dashboard } from "@medusajs/dashboard"

export default function AdminDashboard() {
  return (
    <Dashboard 
      backendUrl={process.env.MEDUSA_BACKEND_URL || "https://medusa-backend-r6sm.onrender.com"}
    />
  )
}
