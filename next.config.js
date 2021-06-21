const RemarkHTML = require("remark-html")
const RemarkPrism = require("remark-prism")

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
    // TODO - Enable the following if switching to vercel
    // async redirects() {
    //     return [
    //         { source: "/", destination: "/courses", permanent: true }
    //     ]
    // },
    target: "serverless"
}