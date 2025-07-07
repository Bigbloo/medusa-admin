"use client"

import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [isRedirecting, setIsRedirecting] = useState(true)
  const backendUrl = "https://medusa-backend-r6sm.onrender.com"

  useEffect(() => {
    // Redirection immédiate vers l'admin
    const timer = setTimeout(() => {
      window.location.href = `${backendUrl}/admin`
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleManualRedirect = () => {
    window.location.href = `${backendUrl}/admin`
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <div style={{ 
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '500px'
      }}>
        <h1 style={{ 
          color: '#333',
          marginBottom: '20px',
          fontSize: '24px'
        }}>
          🚀 Redirection vers l'Admin Medusa
        </h1>
        
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #0070f3',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Redirection en cours...
          </p>
        </div>

        <button 
          onClick={handleManualRedirect}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Accéder à l'Admin Medusa
        </button>

        <p style={{ 
          color: '#888', 
          fontSize: '14px',
          marginTop: '20px'
        }}>
          URL: {backendUrl}/admin
        </p>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
