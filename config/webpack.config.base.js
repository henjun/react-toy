const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');
const config = require('../System.config');

module.exports = {
    entry: config.buildPoint,
    target: 'web',
    output: {
        path: `${config.assetsPath}/dist`,
        filename: '[name].[hash].js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        ["env", { "targets": { "browsers": ["last 2 versions", "> 5% in KR"] } }],
                        "react",
                        "stage-0",
                        "flow"
                    ]
                }
            }
        },{
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/views/index.templ.html'),
            filename: path.join(__dirname, '../src/views/index.ejs'),
            alwaysWriteToDisk: true,
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),

        new HtmlWebpackHarddiskPlugin()
    ]
}