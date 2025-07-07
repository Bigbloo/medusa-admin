import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medusa Admin',
  description: 'Interface d\'administration Medusa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
