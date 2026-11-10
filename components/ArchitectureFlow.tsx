import React from 'react'

export function ArchitectureFlow() {
  return (
    <div className="my-6 p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
        <div>
          <span className="text-emerald-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
            System Interaction Map
          </span>
          <h3 className="text-base font-semibold text-white mt-1">
            Cerberus Sentinel Global Architecture
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono">
          Go 1.23 + Wails v2 + eBPF
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1: Desktop UI */}
        <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
          <div className="text-neutral-400 font-mono text-[10px] uppercase mb-1">Layer 1: Presentation</div>
          <h4 className="text-sm font-semibold text-white mb-2">Wails v2 Desktop UI</h4>
          <p className="text-neutral-400 mb-3 text-[11px]">
            React frontend embedded directly within the native OS window. Communicates with Sentinel via zero-overhead Wails IPC (no local HTTP server for UI).
          </p>
          <div className="space-y-1.5 font-mono text-[11px] text-neutral-300">
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • window.go.main.Bridge
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • Temporal Timeline Renderer
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • Live Log & Scan Stream
            </div>
          </div>
        </div>

        {/* Box 2: Core Daemon */}
        <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/10">
          <div className="text-emerald-400 font-mono text-[10px] uppercase mb-1">Layer 2: Core Sentinel Engine</div>
          <h4 className="text-sm font-semibold text-white mb-2">Go Sentinel Daemon</h4>
          <p className="text-neutral-400 mb-3 text-[11px]">
            Central orchestration hub. Serializes all scans via `scanGate`, coordinates the tri-stage engine, and computes posture scores.
          </p>
          <div className="space-y-1.5 font-mono text-[11px] text-emerald-300">
            <div className="px-2 py-1 rounded bg-black/60 border border-emerald-800/40">
              • HybridEngine (L2/RustScan/Nmap)
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-emerald-800/40">
              • 3-Tier Matcher (identity.Resolve)
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-emerald-800/40">
              • Deterministic Rule Engine (detect)
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-emerald-800/40">
              • SQLite Storage (WAL mode)
            </div>
          </div>
        </div>

        {/* Box 3: Endpoint Agent */}
        <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
          <div className="text-neutral-400 font-mono text-[10px] uppercase mb-1">Layer 3: Kernel Telemetry</div>
          <h4 className="text-sm font-semibold text-white mb-2">eBPF Probe (Linux Agent)</h4>
          <p className="text-neutral-400 mb-3 text-[11px]">
            Zero-overhead Linux kernel hooks streaming process exec, shell interaction, socket connections, and memory injection in signed batches.
          </p>
          <div className="space-y-1.5 font-mono text-[11px] text-neutral-300">
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • Loopback Ingest (127.0.0.1:8080)
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • Process Exec & Shell Events
            </div>
            <div className="px-2 py-1 rounded bg-black/60 border border-neutral-800">
              • MITRE ATT&CK Mapping
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
