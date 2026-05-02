import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Skill Verifier — Verify Candidate Coding Skills',
  description: 'Analyze GitHub repos to verify claimed programming languages, frameworks, and experience levels. Built for technical recruiters and hiring managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f515bdb6-cdd0-4589-9aa5-2f0ddfa9a49f"></script>
      </head>
      <body className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
