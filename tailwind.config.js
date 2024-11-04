/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }, // Corrected "translate" to "translateX"
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-13px)' },
          '50%': { transform: 'translateY(13px)' }, // Corrected '13PX' to '13px'
        },
        tintro: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }, // Corrected '0PX' to '0px'
        },
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};
