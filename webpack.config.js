module.exports = {
	entry: './demo/index.tsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/demo'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	}
};
