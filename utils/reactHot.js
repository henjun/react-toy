const _ = require('underscore');

module.exports = function(config){
    //devmode add react-hot-loader
    config.entry = config.entry.reduce((entry, filename) => {
        entry[_.last(filename.split('/')).replace(/\.js$/g, '')] = [
            'react-hot-loader/patch',
            filename
        ]
        return entry;
    }, {});

    //devmode add react-hot-loader
    _.find(config.module.rules, loaderOption => {
        return loaderOption.use && loaderOption.use.loader && loaderOption.use.loader == 'babel-loader'
    }).use.options.plugins = [
        "react-hot-loader/babel"
    ];

    config.entry.vendor = ['react', 'react-dom'];
    return config;
}