/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        "ime-dark": "#0A111C",
        "ime-accent": "#0070F3",
        "ime-blue": "#00C7FF",
        "ime-purple": "#601EF9",
        "ime-pink": "#EA3379",
        "ime-yellow": "#F0B03D",
        "ime-orange": "#FD563D",
      },
    },
  },
  plugins: [],
};
