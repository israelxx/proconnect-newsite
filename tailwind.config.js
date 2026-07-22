/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#020409',
          900: '#04060c',
          850: '#060911',
          800: '#080c16',
          700: '#0b101d',
          600: '#111827',
          500: '#1b2233',
        },
        brand: {
          DEFAULT: '#2ac3ff',
          soft: '#7fe0ff',
          dim: '#1694c9',
        },
        electric: {
          DEFAULT: '#4a5df5',
          deep: '#1230a8',
        },
        success: '#2ee6a6',
        danger: '#ff5c72',
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(42,195,255,0.15), 0 8px 32px -8px rgba(42,195,255,0.35), 0 24px 64px -24px rgba(0,0,0,0.7)',
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 24px 48px -32px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
};
