/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				'neutral-gray': '#9CA3AF',
				'primary-green': '#4CAF50',
			},
		},
	},
	plugins: [],
};
