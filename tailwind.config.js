/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "accent-clr": "var(--accent-clr)",
        "text-dark": "var(--text-dark)",
        "text-light": "var(--text-light)",
      },
    },
  },
  plugins: [],
};
