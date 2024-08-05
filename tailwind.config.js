/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-13px)' },
          '50%': { transform: 'translateY(13PX)' },
        }
      }
    },
  },
  plugins: [],
}

