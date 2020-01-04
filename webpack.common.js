const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, `dist`),
        filename: `[name].min.js`,
        library: 'select2',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
};
