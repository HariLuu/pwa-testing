// Command line to generate server-worker.js
// sw-precache --config=sw-precache-config.js --verbose

module.exports = {
	staticFileGlobs: [
		'src/assets/**.css',
		'src/assets/*.png',
		'src/index.html',
		'src/*.json',
		'src/**.js',
	],
	stripPrefix: 'src',
	runtimeCaching: [{
		urlPattern: /assets\/products\/.*\.(png|jpg)/,
		handler: 'networkFirst',
	}, {
		urlPattern: /https?:\/\/fonts\.googleapis\.com\/.*/,
		handler: 'networkFirst',
	}, {
		urlPattern: /https?:\/\/fonts\.gstatic\.com\/.*/,
		handler: 'networkFirst',
	}],
};
