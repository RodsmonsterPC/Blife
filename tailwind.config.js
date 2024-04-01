/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "navbar-h": "104px",
        "logo-l": "30px",
        "link-h": "86px",
        "m-links": "25px",
        "m-buttons": "53px",
        "m-rb": "27px",
        "p-links": "400px",
        "b-mobile": "50rem",
      },
      color: {
        "b-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
