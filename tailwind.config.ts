import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'africa-sunset': 'linear-gradient(135deg, #C4704F 0%, #D4A574 50%, #2D5744 100%)',
        'african-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C4704F" fill-opacity="0.05"%3E%3Cpath d="M30 0l30 30-30 30L0 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        terracotta: {
          50: '#FDF6F3',
          100: '#F9E8E1',
          200: '#F0D1C3',
          300: '#E6B59D',
          400: '#D89876',
          500: '#C4704F',
          600: '#B85A3D',
          700: '#9A4A32',
          800: '#7D3E2C',
          900: '#663426',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F3E6',
          200: '#F1E4C7',
          300: '#E8D4A0',
          400: '#DCC378',
          500: '#D4A574',
          600: '#C89456',
          700: '#B4803E',
          800: '#966A32',
          900: '#7A5629',
        },
        forest: {
          50: '#F3F7F4',
          100: '#E3EDE5',
          200: '#C8DCCC',
          300: '#A0C4A7',
          400: '#70A77C',
          500: '#4A8A58',
          600: '#2D5744',
          700: '#284A3A',
          800: '#233D31',
          900: '#1F342A',
        },
        cream: '#F8F6F0',
        charcoal: '#2A2A2A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: '#C4704F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#D4A574',
          foreground: '#2A2A2A',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#2D5744',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
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
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'compass-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'compass-spin': 'compass-spin 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
