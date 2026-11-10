import React from 'react'

interface StatCardProps {
  label: string
  value: string
  subtext?: string
  trend?: string
}

export function StatCard({ label, value, subtext, trend }: StatCardProps) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 relative overflow-hidden">
      <div className="text-xs text-neutral-400 font-mono mb-1">{label}</div>
      <div className="text-2xl font-bold font-mono tracking-tight text-white mb-1">
        {value}
      </div>
      {(subtext || trend) && (
        <div className="flex items-center gap-2 text-xs">
          {trend && <span className="text-emerald-400 font-semibold">{trend}</span>}
          {subtext && <span className="text-neutral-400">{subtext}</span>}
        </div>
      )}
    </div>
  )
}
