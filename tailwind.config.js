/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dbstore: {
          primary: "#0046be",
          secondary: "#219ebc",
          accent: "#111827",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}