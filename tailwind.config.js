/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        5: '-5deg',
        4: '5deg',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },

      colors: {
        darkBlue: '#0A1433',
        navy: '#061340',
        trBlue: '#1570EF',
        trBlueDark: '#0B4FD1',
        blueBg: '#DBE9FE',
        trWhite: '#F4F7FC',
        inkDeep: '#020A22',
        inkSoft: '#0A1B4D',
        electric: '#5B9BFF',
        muted: '#4A5578',
        mutedSoft: '#6B7494',
        slate: '#2A3558',
        haze: '#8A94B0',
        periwinkle: '#BCC8E6',
        skyline: '#AEBBDD',
        steel: '#8FA0CC',
        fog: '#6F80AE',
        whatsapp: '#25D366',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(4,17,54,0.04), 0 18px 40px -28px rgba(4,17,54,0.35)',
        lift: '0 2px 6px rgba(4,17,54,0.06), 0 28px 60px -28px rgba(4,17,54,0.45)',
        glow: '0 18px 45px -18px rgba(17,112,234,0.65)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-magnet': 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
      },
      backgroundImage: {
        'dot-light':
          'radial-gradient(circle at 1px 1px, rgba(10,20,51,0.09) 1px, transparent 0)',
        'dot-dark':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translateY(-16px) rotate(var(--tw-rotate, 0deg))' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, 6%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, -3%) scale(0.96)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-6%, 5%) scale(1.06)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        'step-progress': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        'sheet-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        'drift-slow': 'drift-slow 28s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out-expo both',
        'pop-in': 'pop-in 0.5s ease-out-expo both',
        draw: 'dash 1.8s ease-out forwards',
        'step-progress': 'step-progress 5200ms linear forwards',
        'sheet-up': 'sheet-up 0.36s ease-out-expo both',
      },
    },
  },
  plugins: [],
};
