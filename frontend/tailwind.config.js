/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 2s ease-in-out',  // Define the fade-up animation with custom duration
        'fade-left': 'fadeLeft 2s ease-in-out',
        'fade-right':'fadeRight 1s ease-in-out',
        'gradient-move': 'gradient 5s ease infinite',
          spin_right: 'spin_right 5s ease-in-out infinite',
          spin_right_fast: 'spin_right 2s linear infinite',
          spin_left: 'spin_left 3s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },  // Start off invisible and move up
          '100%': { opacity: 1, transform: 'translateY(0)' },   // End fully visible and at the original position
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },  // Start off invisible and 20px to the right
          '100%': { opacity: 1, transform: 'translateX(0)' },   // End fully visible and at the original position
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },  // Start off invisible and 20px to the right
          '100%': { opacity: 1, transform: 'translateX(0)' },   // End fully visible and at the original position
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spin_right: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin_left: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      
    },
  },
  plugins: [],
}

