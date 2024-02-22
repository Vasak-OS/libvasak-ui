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
        vsk: "var(--system-accent-color)",
      },
			borderRadius: {
				'vsk': 'var(--system-rounded)',
			},
    },
  },
} satisfies Config;
