/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down-and-fade': {
          from: { opacity: 0, transform: 'translateY(-100px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up-and-fade': {
          from: { opacity: 0, transform: 'translateY(100px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down-and-fade': 'slide-down-and-fade 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'slide-up-and-fade 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },

  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

