const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const _ = require('underscore');

const baseConfig = require('./webpack.config.base');
const { log, reactHot} = require('../utils');
const config = require('../System.config');

const devConfig = _.compose(log, reactHot, merge)(baseConfig, {
    devServer: {
        hot: true,
        publicPath: '/dist',
        historyApiFallback: true,
        contentBase: config.assetsPath,
        port: 3001,
        proxy: {
            "**": "http://localhost:3000"
        }
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-eval-source-map'
});

module.exports = devConfig;