const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: `development`,
    entry: `./src/index.js`,
    devtool: `source-map`,
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        publicPath: `http://localhost:8080/`,
        compress: true, // Сжатие
        watchContentBase: true
    },
    externals: {
        jquery: 'jQuery'
    }
});
