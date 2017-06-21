const { resolve } = require('path')
const webpack = require('webpack')
var path = require('path')

module.exports = {
    context: resolve(__dirname, 'src'),
    devtool: 'cheap-module-source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
       ]
    },
    externals: {
        Config: JSON.stringify({
            apiUrl: "https://kolbman.xyz/api",
            url: "https://kolbman.xyz"
        })
    },
    plugins: [
    ]
};
