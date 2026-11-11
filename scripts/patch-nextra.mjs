import fs from 'fs'
import path from 'path'

const schemaFiles = [
  path.join(process.cwd(), 'node_modules', 'nextra-theme-docs', 'dist', 'schemas.js'),
  path.join(process.cwd(), 'node_modules', 'nextra-theme-docs', 'dist', 'schemas.mjs'),
]

for (const file of schemaFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8')
    if (content.includes('children: reactNode,')) {
      content = content.replace('children: reactNode,', 'children: reactNode.optional(),')
      fs.writeFileSync(file, content, 'utf8')
      console.log(`[patch-nextra] Successfully patched ${file}`)
    } else {
      console.log(`[patch-nextra] ${file} already patched or pattern not found`)
    }
  }
}
