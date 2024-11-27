/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				sm: '420px'
			},
			colors: {
				base: {
					DEFAULT: '#181818',
					content: '#e7e7e7'
				},
				primary: {
					DEFAULT: '#4d5aa9',
					200: '#6f82f5',
					content: '#ebebff'
				},
				secondary: {
					DEFAULT: '#c8427a',
					200: '#a02f67',
					content: '#ffe7f0'
				}
			},
			fontFamily: {
				accent: "'Funnel Display', sans-serif"
			},
			animation: {
				'fade-in': 'fade 3s linear 3s forwards'
			},
			keyframes: {
				fade: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			}
		}
	},

	plugins: []
};
