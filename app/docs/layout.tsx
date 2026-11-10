import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import React from 'react'

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap('/docs')

  const navbar = (
    <Navbar
      logo={
        <span className="flex items-center gap-2 font-bold tracking-tight text-lg">
          <svg
            className="w-6 h-6 text-emerald-500 inline-block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Cerberus
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono">
            Docs
          </span>
        </span>
      }
      projectLink="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
    />
  )

  const footer = (
    <Footer>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-neutral-500 gap-4">
        <div>
          © {new Date().getFullYear()} Cerberus Security Intelligence. MIT License.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="hover:text-neutral-300 transition-colors"
          >
            Home
          </a>
          <span>•</span>
          <a
            href="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </Footer>
  )

  return (
    <Layout
      navbar={navbar}
      pageMap={pageMap}
      footer={footer}
      docsRepositoryBase="https://github.com/Cerebelici/Cerberus/tree/feat/hybrid-scanner-engine"
      editLink="View Source on GitHub"
      sidebar={{ defaultMenuCollapseLevel: 1 }}
    >
      {children}
    </Layout>
  )
}
