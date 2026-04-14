/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf8ff",
        surface: "#faf8ff",
        'surface-container-lowest': "#ffffff",
        'surface-container-low': "#f2f3ff",
        'surface-container': "#eaedff",
        'surface-container-high': "#e2e7ff",
        'surface-container-highest': "#d9e2ff",
        'on-surface': "#213156",
        'on-surface-variant': "#4f5e86",
        primary: "#623fde",
        'primary-dim': "#552fd2",
        'primary-container': "#c5b8ff",
        'on-primary': "#fcf7ff",
        secondary: "#006880",
        'secondary-container': "#b7eaff",
        'on-secondary-container': "#00596f",
        tertiary: "#006d45",
        'outline-variant': "#a2b1dd",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #623fde 0%, #c5b8ff 100%)',
      },
      boxShadow: {
        'ambient': '0 20px 40px rgba(33, 49, 86, 0.06)',
      }
    },
  },
  plugins: [],
}
