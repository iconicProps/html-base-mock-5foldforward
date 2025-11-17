/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // We keep darkMode: 'class' if you ever want to add a light mode toggle later.
  // But we have fixed the base.css so the root is permanently dark.
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Use a more robust way to define Oklch colors that Tailwind understands
        // 'oklch(L C H / <alpha-value>)'
        'text': {
          50: "oklch(95.4% 0.013 262.38 / <alpha-value>)",
          100: "oklch(90.79% 0.028 263.43 / <alpha-value>)",
          200: "oklch(81.48% 0.058 263.22 / <alpha-value>)",
          300: "oklch(72.35% 0.087 262.24 / <alpha-value>)",
          400: "oklch(63.01% 0.121 261.93 / <alpha-value>)",
          500: "oklch(53.94% 0.155 261.51 / <alpha-value>)",
          600: "oklch(46.11% 0.128 261.46 / <alpha-value>)",
          700: "oklch(37.94% 0.101 261.39 / <alpha-value>)",
          800: "oklch(29.07% 0.074 261.95 / <alpha-value>)",
          900: "oklch(19.76% 0.041 262.24 / <alpha-value>)",
          950: "oklch(14.88% 0.022 259.63 / <alpha-value>)",
        },
        'background': {
          50: "oklch(95.59% 0.013 255.51 / <alpha-value>)",
          100: "oklch(91.19% 0.027 257.03 / <alpha-value>)",
          200: "oklch(82.34% 0.053 257.37 / <alpha-value>)",
          300: "oklch(73.4% 0.083 257.29 / <alpha-value>)",
          400: "oklch(64.75% 0.111 256.7 / <alpha-value>)",
          500: "oklch(56.09% 0.142 257.21 / <alpha-value>)",
          600: "oklch(47.91% 0.117 257.07 / <alpha-value>)",
          700: "oklch(39.14% 0.094 257.58 / <alpha-value>)",
          800: "oklch(30.09% 0.067 257.56 / <alpha-value>)",
          900: "oklch(20.33% 0.038 257.21 / <alpha-value>)",
          950: "oklch(15.2% 0.02 253.73 / <alpha-value>)",
        },
        // You would need to update primary, secondary, and accent similarly if you use them
        // using the 'oklch(L C H / <alpha-value>)' syntax
        'primary': { /* ... */ },
        'secondary': { /* ... */ },
        'accent': { /* ... */ },
      },
    },
  },
  plugins: [    addIconSelectors(["mdi-light", "vscode-icons"])],
  
}
