/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff', // white
          light: '#ffffff',
          dark: '#fafafa',
        },
        secondary: {
          DEFAULT: '#4d1ed9', // violet
          light: '#6136dd',
          dark: '#3b175a',
        },
        error: {
          DEFAULT: '#EF4444', // red
          light: '#FCA5A5',
          dark: '#B91C1C',
        },
        success: {
          DEFAULT: '#10B981', // green
          light: '#6EE7B7',
          dark: '#047857',
        },
        black: {
          DEFAULT: '#000000', // black
          light: '#333333',
          dark: '#000000',
        },
        'dark-primary': '#7C3AED', // violet
        'dark-secondary': '#FFFFFF', // white
        'dark-error': '#B91C1C', // red
        'dark-success': '#065F46', // green
        'dark-black': '#000000', // black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('daisyui')],
}
