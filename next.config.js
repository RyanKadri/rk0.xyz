module.exports = {
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
                        loader: "markdown-loader",
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
}