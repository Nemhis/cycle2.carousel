const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: `production`,
    entry: {
        'cycle2.carousel': `./src/cycle2.carousel.js`,
        'cycle2.swipe-carousel': './src/cycle2.swipe-carousel.js'
    },
    externals: {
        jquery: 'jquery'
    }
});
