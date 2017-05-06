const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({ // define where to save the file
      filename: 'bundle.css',
      allChunks: true
});

const minifyJS = new webpack.optimize.UglifyJsPlugin({
	minimize: true
});


module.exports = {
	entry: [__dirname + '/app/index.js', __dirname + '/app/index.css'],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
	            use: ExtractTextPlugin.extract({
	                use: [
	                	{
	                		loader: 'css-loader',
	                		options: {
	                			minimize: true,
	                			sourceMap: true
	                		}

	                	}, 
	                	{loader: 'sass-loader'}, 
	                	{loader: 'postcss-loader'}
	                ],
	                fallback: 'style-loader'
	            })
			}
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [extractSass, minifyJS, HTMLWebpackPluginConfig]
};
