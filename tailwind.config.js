/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F0E8',
          subtle: '#FAF7F2',
          light: '#FDFCFA',
          dark: '#E8E1D5',
        },
        beige: {
          DEFAULT: '#D9C8B2',
          light: '#E7DC Plain',
          dark: '#C2B097',
        },
        charcoal: {
          DEFAULT: '#242321',
          pure: '#151413',
          dark: '#1C1B19',
          light: '#2E2D2A',
          border: '#383632',
          card: '#292825',
        },
        taupe: {
          DEFAULT: '#9B8875',
          light: '#B3A392',
          dark: '#7A6956',
        },
        thread: {
          gold: '#C4A882',
          silk: '#E6DDD0',
          cashmere: '#D4C4B5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        'cinematic': '0.25em',
        'wide-editorial': '0.18em',
      },
      boxShadow: {
        'fabric': '0 25px 60px -15px rgba(20, 19, 18, 0.45)',
        'fabric-lg': '0 35px 80px -20px rgba(10, 10, 9, 0.65)',
        'layer': '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(217, 200, 178, 0.15)',
        'layer-active': '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(217, 200, 178, 0.4), 0 0 30px -5px rgba(217, 200, 178, 0.25)'
      },
      animation: {
        'weave-pulse': 'weavePulse 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        weavePulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.8deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
