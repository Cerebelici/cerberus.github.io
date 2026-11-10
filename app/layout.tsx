import './globals.css'
import React from 'react'

export const metadata = {
  title: {
    template: '%s - Cerberus',
    default: 'Cerberus - Network Sentinel & Endpoint Observability',
  },
  description:
    'Cross-platform cybersecurity intelligence platform combining active network sweeps with Linux kernel eBPF endpoint observability.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  )
}
