const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: `development`,
    entry: {
        'cycle2.carousel': `./src/index.js`,
        'cycle2.swipe-carousel': './src/index-swipe.js'
    },
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
