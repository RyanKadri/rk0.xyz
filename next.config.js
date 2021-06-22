const RemarkHTML = require("remark-html");
const RemarkPrism = require("remark-prism");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            esModule: true
                        }
                    },
                    {
                        loader: "remark-loader",
                        options: {
                            remarkOptions: {
                                plugins: [
                                    RemarkPrism,
                                    RemarkHTML, 
                                ]
                            }
                        }
                    }
                ]
            },
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
})