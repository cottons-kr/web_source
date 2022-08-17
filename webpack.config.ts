import * as path from 'node:path'

import HtmlWebpackPlugin = require('html-webpack-plugin')
import MiniCssExtractPlugin = require('mini-css-extract-plugin')
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

import type { Configuration } from 'webpack'
import 'webpack-dev-server'

const isDevelopment = process.env.NODE_ENV === 'development'

const srcPath = path.join(__dirname, 'src')

const config: Configuration = {
	mode: 'production',
	entry: {
		'js/app': './src/App.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
		alias: {
			'#scss': path.join(srcPath, 'scss'),
			'#util': path.join(srcPath, 'util'),
			'#asset': path.join(srcPath, 'asset'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'webpack.tsconfig.json',
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.module\.s[ac]ss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.s[ac]ss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.css$/,
				exclude: /\.module\.s[ac]ss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'asset/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new ForkTsCheckerWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		})
	],
}

export default config
