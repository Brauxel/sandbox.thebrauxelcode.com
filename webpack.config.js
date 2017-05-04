var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: __dirname +'/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: extractSass.extract({
					use: [{
						loader: 'css-loader'
					},{
						loader: 'sass-loader'
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	output: {
		filename: 'transformer.js',
		path: __dirname + '/build'
	},
	plugins: [extractSass, HTMLWebpackPluginConfig]
};