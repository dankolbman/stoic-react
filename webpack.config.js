const { resolve } = require('path')
const webpack = require('webpack')
var path = require('path')

module.exports = {
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer: {
			contentBase: resolve(__dirname, 'public'),
      hot: true,
			publicPath: '/',
      historyApiFallback: true
    },
		entry: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./index.js'
		],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
				publicPath: '/'
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
			Config: JSON.stringify(process.env.ENV === 'production' ? {
			apiUrl: "https://dankolbman.xyz"
			} : {
			apiUrl: "http://localhost:8081/api"
			})
		},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
