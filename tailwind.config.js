/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6fe',
          200: '#bfd4fe',
          300: '#93b6fd',
          400: '#6090fa',
          500: '#3b6ef5',
          600: '#254fea',
          700: '#1d3dd6',
          800: '#1e34ad',
          900: '#1e3189',
          950: '#171f52',
        },
        ink: {
          900: '#0b1120',
          800: '#111827',
          700: '#1f2937',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

