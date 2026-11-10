import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400 mb-6">
        <span>Error 404</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-neutral-400 mb-8 max-w-md text-sm sm:text-base">
        The documentation or resource you are looking for does not exist or has been moved.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-sm font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/docs"
          className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black text-sm font-semibold transition-colors"
        >
          Documentation
        </Link>
      </div>
    </div>
  )
}
