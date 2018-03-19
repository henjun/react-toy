const path = require('path');
const fs = require('fs');
const log = require('./utils/log');

const config = {
    rootPath: __dirname,
    appPath: path.resolve(__dirname, 'app'),
    assetsPath: path.resolve(__dirname, 'src/assets'),
    viewPath: path.resolve(__dirname, 'src/viewsDir'),
    port: 3000
}

config.buildPoint = fs.readdirSync(config.appPath + '/pages')
/*                 */.map(filename => `${config.appPath}/pages/${filename}`);

module.exports = log(config);