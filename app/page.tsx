'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Rediriger vers l'admin dashboard
    window.location.href = '/admin'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Medusa Admin</h1>
        <p>Redirection vers l'administration...</p>
      </div>
    </div>
  )
}
