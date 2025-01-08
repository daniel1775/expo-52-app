module.exports = function (api) {
	api.cache(true);
	return {
		presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@/UI': './src/UI',
						'@/lib': './src/lib',
						'@/schemas': './src/lib/schemas',
						'@/fetching': './src/lib/fetching',
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
		],
	};
};
