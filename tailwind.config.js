/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Evergreen & Ivory design system
        bg: "#f4f1e8",
        bg2: "#ebe7db",
        panel: "#fbf9f2",
        ink: "#1b2620",
        muted: "#5f6b62",
        muted2: "#949a8f",
        acc: "#2f6b4f",
        'acc-dim': "#245840",
        deep: "#16241d",
        'deep-txt': "#e9e7db",
        'deep-mut': "#9aa79d",
        'deep-acc': "#9fceb2",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
