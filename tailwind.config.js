// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path according to your project structure
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'dark-1': '#1a1a1a', // Define the color for bg-dark-1
//         'dark-2': '#2a2a2a', // Add other dark colors if needed
//         'dark-3': '#3a3a3a',
//         'dark-4': '#4a4a4a',
//         'light-1': '#fafafa',
//         'light-4': '#d4d4d4',
//         'primary-500': '#3b82f6', // Example primary color
//       },
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
      },
      screens: {
        'xs': '480px',
      
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};