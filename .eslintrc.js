// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ['expo', 'prettier', 'universe/native'],
	plugins: ['prettier', '@tanstack/query'],
	rules: {
		'prettier/prettier': 'warn',
	},
};
