import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
  latex: true,
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
})
