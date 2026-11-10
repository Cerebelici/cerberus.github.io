import React from 'react'

export function PipelineVisualizer() {
  const stages = [
    {
      num: '01',
      title: 'Stage 1: L2 / ARP Mapping',
      timing: 'Under 1.5s',
      desc: 'Active broadcast UDP prods wake power-saving devices. Direct kernel neighbor tables (Netlink/sysctl/IPNetTable) harvest MACs and sleeping hosts.',
      tool: 'Raw Link Layer',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
    {
      num: '02',
      title: 'Stage 2: High-Speed Port Sweep',
      timing: '2 to 4 seconds',
      desc: 'RustScan sweeps all 65,535 TCP ports simultaneously using adaptive socket batches. Gracefully falls back to Nmap when RustScan is unavailable.',
      tool: 'RustScan / Nmap',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    },
    {
      num: '03',
      title: 'Stage 3: Targeted Deep Audit',
      timing: 'Targeted (< 10s)',
      desc: 'Nmap runs service version detection (-sV) and NSE scripts (vulners) ONLY on verified open ports from Stage 2. Eliminates wasted probes on closed ports.',
      tool: 'Nmap + Vulners NSE',
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    },
  ]

  return (
    <div className="my-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((st) => (
          <div
            key={st.num}
            className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-2xl font-black text-neutral-600">
                {st.num}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${st.badgeColor}`}>
                {st.timing}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{st.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">{st.desc}</p>
            </div>
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Engine:</span>
              <span className="text-neutral-300 font-semibold">{st.tool}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border border-neutral-800 bg-neutral-950/80 text-xs text-neutral-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <strong className="text-neutral-200">Total Scan Duration:</strong> 5–15 seconds for a standard /24 subnet (vs 8–15 minutes for vanilla nmap).
        </span>
        <span className="font-mono text-emerald-400">60x Speedup</span>
      </div>
    </div>
  )
}
