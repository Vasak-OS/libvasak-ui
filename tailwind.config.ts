import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  plugins: [
		'postcss-import': {},
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
	],
  content: [
		"./**/*.{js,ts,html}",
	],
  theme: {
    extend: {
      colors: {
        vsk: "var(--system-accent-color)",
      },
			borderRadius: {
				'vsk': 'var(--system-rounded)',
			},
    },
  },
} satisfies Config;
