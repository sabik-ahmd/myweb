/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        glass: {
          50: "rgba(255,255,255,0.06)",
        }
      },
      backdropBlur: {
        xs: '4px'
      }
    }
  },
  plugins: []
}