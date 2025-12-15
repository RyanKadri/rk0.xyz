import createMdx from '@next/mdx';

const withMdx = createMdx({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [
          ['remark-prism', { transformInlineCode: false }]
        ]
    }
})

export default withMdx({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    turbopack: {
        rules: {
            '*.html': {
                loaders: ['raw-loader'],
                as: '*.js',
            },
            '*.txt': {
                loaders: ['raw-loader'],
                as: '*.js',
            },
            '*.zip': {
                loaders: ['file-loader'],
                as: '*.js',
            },
        },
    },
    async redirects() {
        return [
            { source: "/", destination: "/courses", permanent: true }
        ]
    },
})