/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1', // Deep purple
        secondary: '#9F7AEA', // Medium purple
        'purple-light': '#E9D8FD', // Light purple
        'purple-dark': '#553C9A', // Dark purple
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #6B46C1, #9F7AEA)',
        'gradient-purple-dark': 'linear-gradient(to right, #553C9A, #6B46C1)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(159, 122, 234, 0.3)',
        'purple': '0 0 15px rgba(107, 70, 193, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'rotate-y-180': 'rotate-y-180 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(-5px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'text-glow': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(159, 122, 234, 0.5)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(159, 122, 234, 0.8)',
          },
        },
        'rotate-y-180': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      backdropBlur: {
        'sm': '4px',
        'lg': '8px',
      },
      rotate: {
        'x-10': 'rotateX(10deg)',
        'y-10': 'rotateY(10deg)',
      },
      scale: {
        '102': '1.02',
      },
      transform: {
        '3d': 'preserve-3d',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
}
