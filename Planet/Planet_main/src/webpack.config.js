const webpack = require('webpack');
const path = require('path');

module.exports =
{
	entry:
	{
		entry: path.join(__dirname, 'src', 'app-client.js'),
		output:
		{
			path: path.join(__dirname, 'src', 'static' , 'js'),
			filename: 'bundle.js'
		}
	},
	module:
	{
		/*loaders:
		[{
			test: path.join(__dirname, 'src'),
			loader: ['babel-loader'],
			query:
			{
				cacheDirectory: 'babel_cache',
				presets: ['react', 'es2019']
			}
		}]*/
		rules:
		[
			{test: /\.(js)$/, use: 'babel-loader'}
		]
	},
	plugins:
	[
		new webpack.DefinePlugin({
			//'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			__isBrowser__: "true"
		}),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin
		({
			compress: true,
			mangle: false,
			sourcemap: false,
			beautify: false,
			dead_code: true
		})
	]
};