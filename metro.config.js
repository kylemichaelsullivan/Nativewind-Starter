const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts = [
	'js',
	'jsx',
	'ts',
	'tsx',
	'json',
	'css',
	'mjs',
];

defaultConfig.resolver.assetExts = [
	...defaultConfig.resolver.assetExts,
	'ttf',
	'otf',
];

module.exports = defaultConfig;
