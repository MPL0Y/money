/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brutal: {
          bg: '#0A0A0A',
          surface: '#111111',
          grid: '#222222',
          border: '#2C2C2C',
          red: '#FF2A2A',
          green: '#4AF626',
          text: '#EAEAEA',
          dim: '#737373',
          dark: '#050505',
        }
      },
      fontFamily: {
        industrial: ['"Archivo Black"', '"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      }
    },
  },
  plugins: [],
}
