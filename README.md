# Cerberus Landing Page & Documentation Site

Official landing page and comprehensive documentation for [**Cerberus**](https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine) — a cross-platform cybersecurity intelligence platform combining active network sweeps with Linux kernel eBPF endpoint observability.

Built with **Next.js 15**, **Nextra 4 (App Router)**, **MDX**, and **Tailwind CSS v4** in a clean Vercel aesthetic.

---

## Site Architecture

- **Landing Page (`/`):** Vercel-style interactive showcase highlighting the Tri-Stage Hybrid Scanning Engine, live terminal preview, performance metrics, and key capabilities.
- **Documentation (`/docs`):** Complete Nextra-powered technical and non-technical documentation, organized into:
  - **Introduction & Description:** Core capabilities, tri-stage pipeline, and fleet posture scoring.
  - **Comparison:** Benchmarks vs. standalone Nmap, consumer scanners (Fing), and EDR agents (Osquery/Falco).
  - **Architecture:** System global architecture, subsystems, data models, SQLite schema migrations (1–8), and process concurrency.
  - **Internal Tools:** Wails v2 IPC, RustScan, Nmap, OS link-layer APIs (`netlink`, `sysctl`, `GetIpNetTable2`).
  - **Scanning & Identity:** The 4 scan types, 3-tier identity hierarchy, and the sleeping mobile heuristic classifier.
  - **Challenges & Future Work:** Router packet limits, mDNS filtering, vendor MAC randomization, AI/ML helper models, and smart adaptive scan speeds.
  - **Glossary:** Non-technical reference guide for networking and security terms.

---

## Development

```bash
# Install dependencies
npm install

# Run local development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
