/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ['class'],
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    'apps/**/*.{js,ts,jsx,tsx}',
    'packages/**/*.{js,ts,jsx,tsx}',
    'app/**/*.{js,ts,jsx,tsx}',
    'pages/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  prefix: 'tw',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        xs: '1rem',
        sm: '1.25rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '2.2em',
        '2xl': '2.5rem',
        '3xl': '2.7rem',
        '4xl': '3rem',
        '5xl': '3.4rem',
        '6xl': '4rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities(UTILITY_STYLES)
    }),
  ],
}

const UTILITY_STYLES = {
  '.global-layout': {
    'grid-column-start': '2',
    'grid-column-end': '5',
    'grid-row-start': '2',
    'grid-row-end': '4',
    'background-color': '#ebf8fc', // bg-slate-50
    overflow: 'hidden',
    padding: '3rem',
    height: '100%',
  },
  '.link': {},
  '.btn-common': {},
  '.text-clickable': {},
}
