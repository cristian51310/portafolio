import nextMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/articles/:slug*',
        destination: '/blog/:slug*', // Matched parameters can be used in the destination
        permanent: true
      }
    ]
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine (node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine (node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord (node) {
            node.properties.className = ['word--highlighted']
          }
        }
      ]
    ]
  }
})

export default withMDX(nextConfig)
