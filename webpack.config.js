var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/main',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'src/static/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                excludes: ['*.css', '/node_modules/'],
            },
            {   
                test: /\.css$/,
                loader: 'style!css?modules&localIdentName=[local]___[hash:base64:5]&importLoaders=1!postcss'
            }
        ]
    }
};
