const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const log = require('../utils/log');

module.exports = log(merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        })
    ],
    devtool: 'cheap-module-source-map'
}));