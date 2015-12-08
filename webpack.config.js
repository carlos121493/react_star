var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry:{
		main:"./index.js"
	},
	plugins:[
		new ExtractTextPlugin('index.css'),new webpack.HotModuleReplacementPlugin()
	],
	output:{
		path:path.join(__dirname,'dest'),
		filename:"[name].js",
		publicPath:"http://127.0.0.1:8080/dest"
	},
	module:{
		loaders:[
			{test:/\.(js|jsx)?$/,loader:'babel!react-hot!jsx?harmony',exclude:/node_modules/},
			{test:/\.css?$/,loader:ExtractTextPlugin.extract("style-loader", "css-loader"),exclude:/node_modules/}
	]}
}