module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					root: ['.'],
					alias: {
						'@': '.',
						'@components': './components',
						'@context': './context',
						'@data': './data',
						'@screens': './screens',
						'@assets': './assets',
						'@types': './types',
					},
				},
			],
		],
	};
};
