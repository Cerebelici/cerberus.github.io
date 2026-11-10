import React from 'react'

export function ComparisonMatrix() {
  const features = [
    {
      name: 'Tri-Stage Hybrid Engine (ARP + RustScan + Targeted Nmap)',
      cerberus: true,
      nmap: false,
      fing: false,
      osquery: false,
    },
    {
      name: 'Full 1-65535 Port Audit in < 15s',
      cerberus: true,
      nmap: false,
      fing: false,
      osquery: false,
    },
    {
      name: 'Kernel eBPF Telemetry (Linux processes, sockets, shell)',
      cerberus: true,
      nmap: false,
      fing: false,
      osquery: true,
    },
    {
      name: 'MITRE ATT&CK Threat Incident Engine',
      cerberus: true,
      nmap: false,
      fing: false,
      osquery: false,
    },
    {
      name: '3-Tier Identity (Handles randomized MACs & DHCP changes)',
      cerberus: true,
      nmap: false,
      fing: 'Partial',
      osquery: false,
    },
    {
      name: 'Deterministic Fleet Posture Score (cvss-agg-v1)',
      cerberus: true,
      nmap: false,
      fing: false,
      osquery: false,
    },
    {
      name: '100% Local-First / Zero Cloud Requirement',
      cerberus: true,
      nmap: true,
      fing: false,
      osquery: true,
    },
    {
      name: 'Native Cross-Platform UI (Wails v2 Desktop IPC)',
      cerberus: true,
      nmap: false,
      fing: true,
      osquery: false,
    },
  ]

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-neutral-800 bg-neutral-950/80">
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900/50">
            <th className="py-3.5 px-4 font-semibold text-neutral-200">Capability / Feature</th>
            <th className="py-3.5 px-4 font-semibold text-emerald-400 bg-emerald-950/20 text-center">
              Cerberus Sentinel
            </th>
            <th className="py-3.5 px-4 font-semibold text-neutral-400 text-center">Nmap Standalone</th>
            <th className="py-3.5 px-4 font-semibold text-neutral-400 text-center">Fing / Consumer Tools</th>
            <th className="py-3.5 px-4 font-semibold text-neutral-400 text-center">Osquery / Falco</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800/60 font-mono">
          {features.map((f, i) => (
            <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
              <td className="py-3 px-4 font-sans font-medium text-neutral-300">{f.name}</td>
              <td className="py-3 px-4 text-center bg-emerald-950/10 font-bold text-emerald-400">
                {f.cerberus ? '✓ Yes' : '—'}
              </td>
              <td className="py-3 px-4 text-center text-neutral-400">
                {f.nmap === true ? '✓ Yes' : f.nmap === false ? '✗ No' : f.nmap}
              </td>
              <td className="py-3 px-4 text-center text-neutral-400">
                {f.fing === true ? '✓ Yes' : f.fing === false ? '✗ No' : f.fing}
              </td>
              <td className="py-3 px-4 text-center text-neutral-400">
                {f.osquery === true ? '✓ Yes' : f.osquery === false ? '✗ No' : f.osquery}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
