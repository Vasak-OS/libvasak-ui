import type { Config } from "tailwindcss";

export default {
  plugins: [
		'postcss-import': {},
	],
  content: [
		"./**/*.{js,ts,html}",
	],
  theme: {
    extend: {
      colors: {
        vsk: "#0BC98C",
      },
			borderRadius: {
				'vsk': 'var(--system-rounded)',
			},
    },
  },
} satisfies Config;
