import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import marked from "marked";
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'path';
import webpack from "webpack";
const renderer = new marked.Renderer();

const config: webpack.Configuration = {
    entry: './packages/site/src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ["raw-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|zip)$/,
                use: [
                'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            template: "./packages/site/src/index.html"
        }),
        new CopyWebpackPlugin([
            { from: "robots.txt", to: "./"}
        ]),
        new MonacoWebpackPlugin({
            languages: ["html", "css", "javascript", "typescript"],
            features: ['accessibilityHelp', 'bracketMatching',
             'clipboard', 'codeAction', 'colorDetector', 'comment',
             'contextmenu', 'coreCommands', 'cursorUndo', 'dnd', 'find', 'folding',
             'fontZoom', 'format', 'hover',
             'linesOperations',
             'links', 'parameterHints',
             'rename', 'suggest',
             'transpose'
            ]
        })
    ]
};

export default config;