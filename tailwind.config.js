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
        obsidian: {
          950: '#020203',
          900: '#050508',
          850: '#09090f',
          800: '#0e0f17',
          700: '#161722',
        },
        gold: {
          glow: '#ffdf7e',
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        aurora: {
          cyan: '#38bdf8',
          emerald: '#34d399',
          violet: '#a78bfa',
          rose: '#fb7185'
        }
      },
      fontFamily: {
        display: ['"Clash Display"', '"Syne"', '"Cabinet Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'haptic': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'fluid': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'aurora-slow': 'aurora 20s ease infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'float-reverse': 'floatReverse 9s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'border-beam': 'borderBeam 6s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'scale(1) translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'scale(1.15) translate(30px, -20px) rotate(3deg)' },
          '100%': { transform: 'scale(0.95) translate(-25px, 25px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        }
      },
      boxShadow: {
        'specular': 'inset 0 1px 1px rgba(255, 255, 255, 0.16)',
        'specular-strong': 'inset 0 1px 2px rgba(255, 255, 255, 0.28), inset 0 0 12px rgba(255, 255, 255, 0.04)',
        'glow-emerald': '0 0 50px -10px rgba(52, 211, 153, 0.25)',
        'glow-violet': '0 0 60px -12px rgba(167, 139, 250, 0.3)',
        'glow-gold': '0 0 50px -10px rgba(234, 179, 8, 0.25)',
      }
    },
  },
  plugins: [],
}
