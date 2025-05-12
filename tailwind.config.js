/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9ddfc',
          300: '#7ec2f9',
          400: '#3aa1f3',
          500: '#1a85e1',
          600: '#0967c2',
          700: '#0b559e', /* Primary color - WordPress blue */
          800: '#0e4377',
          900: '#0f3a66',
        },
        orange: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fed3b3',
          300: '#fdba8c',
          400: '#fb9061',
          500: '#f56e28', /* Accent color */
          600: '#e04e16',
          700: '#c43c13',
          800: '#9a2f17',
          900: '#7b2718',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};