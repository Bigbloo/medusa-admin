"use client"

import { useEffect } from "react"

export default function AdminDashboard() {
  useEffect(() => {
    // Redirection vers l'admin backend
    const backendUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "https://medusa-backend-r6sm.onrender.com"
    window.location.href = `${backendUrl}/app`
  }, [])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Redirection vers l'admin Medusa...</h1>
        <p>Si la redirection ne fonctionne pas, cliquez sur le lien ci-dessous :</p>
        <a 
          href={`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "https://medusa-backend-r6sm.onrender.com"}/app`}
          style={{ color: '#0070f3', textDecoration: 'underline' }}
        >
          Accéder à l'admin Medusa
        </a>
      </div>
    </div>
  )
}
