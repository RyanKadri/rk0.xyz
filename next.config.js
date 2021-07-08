const withMDX = require("@next/mdx");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withMDX({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [
        ]
    }
})(withBundleAnalyzer({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.(html|txt)$/,
                exclude: /node_modules/,
                use: ["raw-loader"]
            },
            {
                test: /\.(zip)$/,
                use: [
                    'file-loader',
                ],
            },
        )
        return config
    },
    async redirects() {
        return [
            { source: "/", destination: "/courses", permanent: true }
        ]
    },
    target: "serverless"
}))