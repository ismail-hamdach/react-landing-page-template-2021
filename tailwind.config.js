module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#E71727',
        secondary: '#a12c34',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#FFFAF5',
        text: "#1D1D1D",
        textHover: "#0D0D0D"
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
      backgroundImage: {
        'quality': "url('/assets/images/bg-quality.png')",
        'barber': "url('/assets/images/bg-barber.png')",
        'hero': "url('/assets/images/happyTeam.png')",
        'loading': "url('/assets/images/loading.gif')",
        'montrez': "url('/assets/images/montrez-moi.png')"
      }
    },
  },
  variants: {},
  plugins: [],
};
