/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-13px)' },
          '50%': { transform: 'translateY(13PX)' },
        },
        tintro: {
          '0%': { opacity : '0' ,transform: 'translateY(25px)' },
          '100%': { opacity : '1',transform: 'translateY(0PX)' },
          
        }
      }
    },
  },
  plugins: [],
}

