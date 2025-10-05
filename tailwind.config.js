/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#111212",
        knpy: {
          dark: "#111212",
          primary: "#111212",
        },
      },
    },
  },
  plugins: [],
};
