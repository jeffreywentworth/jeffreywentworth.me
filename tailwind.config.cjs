/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px'
		},
		extend: {
			fontFamily: {
				mono: ['Roboto Mono', 'monospace']
			}
		},
		colors: {
			webColor: '#EAF4F4',
			wintergreen: '#6B9080',
			mint: '#F6FFF8',
			lightCyan: '#CCE3DE',
			cambridge: '#A4C3B2',
			lilac: '#C3A2BF'
		}
	},
	plugins: []
};
