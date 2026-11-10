import React from 'react'

interface IssueCardProps {
  title: string
  problem: string
  cause: string
  solution: string
  impact: string
}

export function IssueCard({
  title,
  problem,
  cause,
  solution,
  impact,
}: IssueCardProps) {
  return (
    <div className="p-5 my-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40 text-amber-300">
          Encountered Challenge
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-3">
        <div className="p-3 rounded bg-black/40 border border-neutral-800/80">
          <span className="text-neutral-500 font-mono text-[10px] block uppercase mb-1">
            The Barrier
          </span>
          <p className="text-neutral-300">{problem}</p>
          <p className="text-neutral-500 text-[11px] mt-1.5 font-mono">Cause: {cause}</p>
        </div>
        <div className="p-3 rounded bg-emerald-950/20 border border-emerald-900/30">
          <span className="text-emerald-400 font-mono text-[10px] block uppercase mb-1">
            Cerberus Solution
          </span>
          <p className="text-emerald-200">{solution}</p>
          <p className="text-emerald-400 text-[11px] mt-1.5 font-mono">Outcome: {impact}</p>
        </div>
      </div>
    </div>
  )
}
