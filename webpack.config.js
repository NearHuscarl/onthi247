// https://thesoftwaresimpleton.com/blog/2019/03/15/ts-code-splitting

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
	const isProduction = env === 'production';

	return {
		entry: ['@babel/polyfill', './src/app.js'],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: isProduction ? 'js/[name].[chunkhash:8].chunk.js' : 'js/[name].chunk.js',
			chunkFilename: isProduction ? 'js/[name].[chunkhash:8].chunk.js' : 'js/[name].chunk.js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test:  /\.(js|jsx)$/,
					exclude: /node_modules/,
				},
				{
					test: /\.(scss|css)$/,
					use: [
						// 'css-hot-loader',
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: !isProduction,
								sourceMap: true,
							},
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					]
				},
				{
					test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/',
							},
						},
					],
				},
				{
					test: /\.(jpg|png|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/',
							},
						},
					],
				},
			],
		},
		plugins: (isProduction ? [] : [/* new BundleAnalyzerPlugin() */]).concat([
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'public/index.html',
			}),
			new MiniCssExtractPlugin({
				filename: isProduction ? 'css/[name].[chunkhash:8].chunk.css' : 'css/[name].chunk.css',
				chunkFilename: isProduction ? 'css/[name].[chunkhash:8].chunk.css' : 'css/[name].chunk.css',
			}),
		]),
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			// contentBase: path.join(__dirname, 'dist'),
			// watchContentBase: true, // A workaround to be able to watch for html file changes
			historyApiFallback: true,
		},
		mode: 'development',
		resolve: {
			extensions: ['.js', '.jsx'],
		},
	};
};
