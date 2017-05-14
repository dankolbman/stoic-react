var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
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
			Config: JSON.stringify(process.env.ENV === 'production' ? {
			apiUrl: "https://dankolbman.xyz"
			} : {
			apiUrl: "http://localhost:8081/api"
			})
		},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
