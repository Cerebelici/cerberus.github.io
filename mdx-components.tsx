import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { MetricBar } from './components/MetricBar'
import { PipelineVisualizer } from './components/PipelineVisualizer'
import { ComparisonMatrix } from './components/ComparisonMatrix'
import { ArchitectureFlow } from './components/ArchitectureFlow'
import { IssueCard } from './components/IssueCard'
import { StatCard } from './components/StatCard'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components: Record<string, any> = {}) {
  return {
    ...docsComponents,
    MetricBar,
    PipelineVisualizer,
    ComparisonMatrix,
    ArchitectureFlow,
    IssueCard,
    StatCard,
    ...components,
  }
}
