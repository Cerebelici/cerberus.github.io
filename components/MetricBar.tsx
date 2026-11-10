import React from 'react'

interface MetricBarProps {
  label: string
  value: number | string
  percentage: number
  benchmark?: string
  color?: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose'
  subtext?: string
}

export function MetricBar({
  label,
  value,
  percentage,
  benchmark,
  color = 'emerald',
  subtext,
}: MetricBarProps) {
  const colorMap = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  }

  const bgMap = {
    emerald: 'bg-emerald-950/40 border-emerald-800/40',
    blue: 'bg-blue-950/40 border-blue-800/40',
    purple: 'bg-purple-950/40 border-purple-800/40',
    amber: 'bg-amber-950/40 border-amber-800/40',
    rose: 'bg-rose-950/40 border-rose-800/40',
  }

  return (
    <div className={`p-4 rounded-xl border ${bgMap[color]} my-3 transition-all hover:border-neutral-600`}>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-medium text-neutral-200">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-white">{value}</span>
          {benchmark && (
            <span className="text-xs text-neutral-400 font-mono">({benchmark})</span>
          )}
        </div>
      </div>
      <div className="w-full bg-neutral-900 rounded-full h-2.5 overflow-hidden border border-neutral-800">
        <div
          className={`h-full rounded-full ${colorMap[color]} transition-all duration-700 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
      {subtext && (
        <p className="text-xs text-neutral-400 mt-2">{subtext}</p>
      )}
    </div>
  )
}
