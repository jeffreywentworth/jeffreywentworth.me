import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		trailingSlash: 'always',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false
		})
	}
};

export default config;
