/** @type {import('nativewind').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	// Disable class name compression in development
	mode: 'development',
	// Optional: Set to true to see full class names in production too
	// mode: 'production',
};
