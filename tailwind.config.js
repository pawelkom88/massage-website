/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "clamp(2rem, 0.8rem + 2vw, 5rem);",
        heading2: "clamp(1.5rem, 0.5rem + 1.5vw, 3rem);",
        heading3: "clamp(1.2rem, 0.3rem + 1.2vw, 2.7rem);",
      },
      maxWidth: {
        readable: "78ch",
      },
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

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
