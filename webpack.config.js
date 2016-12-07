module.exports = {

	entry: './app.js',

	output: {
		filename: 'bundle.js'
	},

	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader' // babel is checking the babelrc-file for what to do
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}

};
