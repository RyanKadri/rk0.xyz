import webpack from "webpack";
import bundle from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import common from './webpack.common';


const config: webpack.Configuration = merge(common, {
    mode: 'production',
    plugins: process.env.CICD 
        ? []
        : [
            new bundle.BundleAnalyzerPlugin()
        ]
});

export default config;