'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Shield,
  Terminal,
  Activity,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  ExternalLink,
  ChevronRight,
  Search,
} from 'lucide-react'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'stage1' | 'stage2' | 'stage3'>('stage2')

  const stageData = {
    stage1: {
      name: 'Stage 1: L2 ARP & Neighbor Mapping',
      time: '1.2s',
      desc: 'Active broadcast UDP prods wake power-saving devices. Direct link-layer queries extract MAC addresses from OS kernel tables (netlink/sysctl/GetIpNetTable2).',
      code: `[Scanner] Stage 1 ARP sweep initialized on 192.168.1.0/24
[Platform] Native kernel neighbor cache queried: 18 entries
[Discovery] Host 192.168.1.42 (Apple Inc, 3a:f2:b1:..) woke via UDP prod
[Status] Stage 1 complete in 1,210ms (18 active neighbors mapped)`,
    },
    stage2: {
      name: 'Stage 2: High-Speed Port Sweep',
      time: '3.4s',
      desc: 'RustScan tests all 65,535 TCP ports simultaneously using asynchronous socket multiplexing. Eliminates wasted timeouts on closed ports.',
      code: `[RustScan] Sweeping 65,535 TCP ports across 18 target hosts
[RustScan] Adaptive batch: 4,096 sockets/sec | RTT: 1.2ms
[Discovered] 192.168.1.42 -> Open ports: [22, 80, 443, 8080, 5353]
[Discovered] 192.168.1.99 -> Open ports: [80, 554, 8000] (RTSP Camera)
[Status] Stage 2 complete in 3,420ms (Found 14 open services)`,
    },
    stage3: {
      name: 'Stage 3: Targeted Deep Audit',
      time: 'Targeted (< 8s)',
      desc: 'Nmap runs service protocol inspection (-sV) and vulnerability scripts (vulners) ONLY against verified open ports. Zero queries on closed ports.',
      code: `[Nmap] Deep auditing 14 confirmed open ports with -sV --script vulners
[Audit] 192.168.1.42:22 -> OpenSSH 8.9p1 (Clean)
[Audit] 192.168.1.42:8080 -> Apache 2.4.49 -> CVE-2021-41773 (CVSS 7.5 HIGH)
[Identity] Reconciled AssetUID: 8f4e2c01-7b9a-4c28-98e3-a64fb5e290f1
[Status] Posture score re-indexed to 82.4/100`,
    },
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      {/* Glow Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-[600px] -left-40 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full" />
        <div className="absolute top-[1200px] -right-40 w-[600px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 border-b border-neutral-800/80 backdrop-blur-md bg-black/60 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
              Cerberus
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
              Sentinel v1.0
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/docs/architecture"
              className="text-neutral-400 hover:text-white transition-colors hidden sm:inline-block"
            >
              Architecture
            </Link>
            <Link
              href="/docs/comparison"
              className="text-neutral-400 hover:text-white transition-colors hidden md:inline-block"
            >
              Comparison
            </Link>
            <Link
              href="/docs/issues"
              className="text-neutral-400 hover:text-white transition-colors hidden lg:inline-block"
            >
              Challenges Solved
            </Link>
            <a
              href="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
            <Link
              href="/docs"
              className="px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
            >
              Get Started →
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Introducing Cerberus feat/hybrid-scanner-engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Network Sentinel & Linux Endpoint Observability
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Cerberus pairs lightning-fast <strong>tri-stage network sweeps</strong> (ARP + RustScan + Nmap) with <strong>Linux kernel eBPF telemetry</strong> and deterministic MITRE ATT&CK threat rules in a 100% local-first architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/docs"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2"
            >
              Explore Documentation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/architecture"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4 text-neutral-400" /> System Architecture
            </Link>
            <a
              href="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-800/80 hover:border-neutral-700 text-neutral-400 hover:text-white text-sm transition-all flex items-center justify-center gap-2"
            >
              View GitHub Branch
            </a>
          </div>
        </div>

        {/* Live Interactive Pipeline Terminal */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl overflow-hidden shadow-2xl mb-24">
          <div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-neutral-400">
                HybridEngine Tri-Stage Scanning Pipeline
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-neutral-500">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>Pipeline: ACTIVE</span>
            </div>
          </div>

          {/* Pipeline Stage Selectors */}
          <div className="grid grid-cols-3 border-b border-neutral-800 text-xs font-mono bg-black/40">
            {(['stage1', 'stage2', 'stage3'] as const).map((stage, idx) => (
              <button
                key={stage}
                onClick={() => setActiveTab(stage)}
                className={`py-3 px-4 text-left transition-colors flex items-center justify-between border-r last:border-r-0 border-neutral-800 ${
                  activeTab === stage
                    ? 'bg-neutral-900/90 text-white font-semibold border-b-2 border-b-emerald-500'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <span>Stage 0{idx + 1}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
                  {stageData[stage].time}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-white mb-1">
                {stageData[activeTab].name}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {stageData[activeTab].desc}
              </p>
            </div>

            <pre className="p-4 rounded-xl bg-black border border-neutral-800 text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
              <code>{stageData[activeTab].code}</code>
            </pre>
          </div>
        </div>

        {/* Real-World Performance Bars */}
        <div className="max-w-4xl mx-auto mb-28">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Performance by the Numbers
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto">
              How Cerberus delivers enterprise-grade intelligence while staying light on hardware and network bandwidth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-neutral-200">Full 65,535 TCP Port Sweep</span>
                <span className="font-mono text-emerald-400 font-bold">12s (vs 12m)</span>
              </div>
              <div className="w-full bg-neutral-900 rounded-full h-2 mb-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[95%]" />
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                RustScan socket multiplexing + Nmap targeted -sV. 60x speedup over vanilla Nmap.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-neutral-200">eBPF Ingest to Threat Alert (P95)</span>
                <span className="font-mono text-purple-400 font-bold">4.2 ms</span>
              </div>
              <div className="w-full bg-neutral-900 rounded-full h-2 mb-2">
                <div className="bg-purple-500 h-2 rounded-full w-[96%]" />
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Sharded dispatcher matches MITRE ATT&CK rules concurrently in memory.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-neutral-200">Sentinel Daemon Memory Usage</span>
                <span className="font-mono text-blue-400 font-bold">&lt; 35 MB RAM</span>
              </div>
              <div className="w-full bg-neutral-900 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full w-[90%]" />
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Pure Go daemon with embedded SQLite in WAL mode. Zero external database required.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-neutral-200">Subnet Bandwidth Consumption</span>
                <span className="font-mono text-amber-400 font-bold">&lt; 250 KB/s</span>
              </div>
              <div className="w-full bg-neutral-900 rounded-full h-2 mb-2">
                <div className="bg-amber-500 h-2 rounded-full w-[15%]" />
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Serialized scanGate prevents Wi-Fi packet drops, router freezes, or stream stutters.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Feature Grid */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Engineered for Complete Situational Awareness
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto">
              Everything required to audit, track, and protect private networks in one cohesive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Tri-Stage Hybrid Engine
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Chains Layer-2 ARP sweeps, RustScan full-port sweeping, and targeted Nmap CVE analysis. Never scans closed ports twice.
                </p>
              </div>
              <Link
                href="/docs/description"
                className="text-xs text-emerald-400 font-medium flex items-center gap-1 hover:underline"
              >
                Learn how it works <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Card 2 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  3-Tier Identity Matcher
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Survives iOS/Android randomized MAC addresses and DHCP lease renewals. Uses cryptographic keys, LAA bit checking, and port synergy.
                </p>
              </div>
              <Link
                href="/docs/device-identification"
                className="text-xs text-blue-400 font-medium flex items-center gap-1 hover:underline"
              >
                Identity resolution hierarchy <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Card 3 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Kernel eBPF Telemetry
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Lightweight Linux probe catches reverse shells, webshell activity, memory injection, and privilege escalation with sub-5ms lag.
                </p>
              </div>
              <Link
                href="/docs/architecture/subsystems"
                className="text-xs text-purple-400 font-medium flex items-center gap-1 hover:underline"
              >
                Threat engine details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Card 4 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Fleet Posture (cvss-agg-v1)
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Deterministic 0.0 to 100.0 health score. Automatically weighs CVSS base scores, 1.2x exploit bonuses, and active incident penalties.
                </p>
              </div>
              <Link
                href="/docs/description"
                className="text-xs text-amber-400 font-medium flex items-center gap-1 hover:underline"
              >
                Posture rating formula <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Card 5 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  100% Local-First Storage
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  All device records, timelines, and events reside in an embedded SQLite database in WAL mode. Zero tracking or cloud dependency.
                </p>
              </div>
              <Link
                href="/docs/architecture/db"
                className="text-xs text-emerald-400 font-medium flex items-center gap-1 hover:underline"
              >
                SQLite migrations & schema <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Card 6 */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Native Cross-Platform Desktop
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Wails v2 native application for macOS (Touch ID / SMJobBless), Windows (UAC / Npcap), and Linux (Capabilities).
                </p>
              </div>
              <Link
                href="/docs/tools"
                className="text-xs text-rose-400 font-medium flex items-center gap-1 hover:underline"
              >
                Platform prerequisites <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action Footer Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/50 to-black text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Get Started with Cerberus
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Explore the full architectural specification, learn how the 3-tier matcher works, and start auditing your local network in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/docs"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-sm transition-colors"
              >
                Open Documentation
              </Link>
              <Link
                href="/docs/glossary"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors"
              >
                Non-Technical Glossary
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-800/80 py-8 text-xs text-neutral-500 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Cerberus Cybersecurity Intelligence Platform</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="hover:text-neutral-300 transition-colors">
              Documentation
            </Link>
            <Link href="/docs/architecture" className="hover:text-neutral-300 transition-colors">
              Architecture
            </Link>
            <Link href="/docs/comparison" className="hover:text-neutral-300 transition-colors">
              Comparison
            </Link>
            <a
              href="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub (feat/hybrid-scanner-engine)
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
