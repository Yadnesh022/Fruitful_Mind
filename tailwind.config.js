/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New Psychology Practice Palette: "Bright, clear, human"
        primary: {
          DEFAULT: '#12766E', // Teal
          deep: '#0B4F4A',    // Deep Teal (headings, footer, hero bands)
          tint: '#D9F0EC',    // Teal tint
          50: '#F0FAF8',
          100: '#D9F0EC',
          200: '#B2E0D8',
          300: '#7EC8BD',
          400: '#43AC9F',
          500: '#12766E',
          600: '#0E625C',
          700: '#0B4F4A',
          800: '#083B37',
          900: '#052926',
        },
        accent: {
          DEFAULT: '#FFC845', // Sunshine Yellow (CTAs, highlights, ink text on it)
          hover: '#F5B82E',
          tint: '#FFF7DE',
          coral: '#FF8A5B',   // Warm coral (tiny accent under 5%)
        },
        secondary: {
          DEFAULT: '#8C7AE6', // Lavender
          tint: '#ECE8FB',    // Lavender tint
          50: '#F7F5FE',
          100: '#ECE8FB',
          200: '#DAD2F7',
          300: '#BDB0F0',
          500: '#8C7AE6',
          700: '#6854C4',
        },
        sky: {
          tint: '#E3F1FA',
          100: '#E3F1FA',
          200: '#C7E4F5',
        },
        sand: {
          warm: '#FBF8F1',    // Main page background
          white: '#FFFFFF',   // Alt sections
        },
        ink: {
          DEFAULT: '#1D2B2E', // Primary body / headline text
          muted: '#5B6B6E',   // Secondary body text
          soft: '#859699',    // Captions / borders
          dark: '#0B1517',
        },
        dark: {
          bg: '#0F1A1C',      // Dark mode canvas background
          surface: '#16282B', // Dark mode card / container
          surfaceAlt: '#1F3438',
          border: 'rgba(217, 240, 236, 0.12)',
          text: '#F1F7F6',
          muted: '#9BB1B0',
        },

        // Backward compatibility mappings during multi-page transition
        papaya: {
          DEFAULT: '#12766E',
          deep: '#0B4F4A',
          50: '#F0FAF8',
          100: '#D9F0EC',
          200: '#B2E0D8',
          300: '#7EC8BD',
          400: '#43AC9F',
          500: '#12766E',
          600: '#0E625C',
          700: '#0B4F4A',
        },
        mango: {
          DEFAULT: '#FFC845',
          50: '#FFFDF5',
          100: '#FFF7DE',
          200: '#FFECA8',
          400: '#FFD368',
          500: '#FFC845',
          600: '#F5B82E',
        },
        leaf: {
          DEFAULT: '#12766E',
          deep: '#0B4F4A',
          50: '#F0FAF8',
          100: '#D9F0EC',
        },
        grape: {
          DEFAULT: '#8C7AE6',
          50: '#F7F5FE',
          100: '#ECE8FB',
          500: '#8C7AE6',
        },
        brand: {
          canvas: {
            light: '#FBF8F1',
            lightAlt: '#FFFFFF',
            dark: '#0F1A1C',
            darkCard: '#16282B',
            darkBorder: 'rgba(217, 240, 236, 0.12)',
          },
          plum: {
            50: '#F1F7F6',
            100: '#ECE8FB',
            200: '#D9F0EC',
            800: '#0B4F4A',
            900: '#1D2B2E',
            950: '#0B1517',
          },
          peach: {
            50: '#F0FAF8',
            100: '#D9F0EC',
            200: '#B2E0D8',
            500: '#12766E',
          },
          sage: {
            50: '#F0FAF8',
            100: '#D9F0EC',
            500: '#12766E',
            700: '#0B4F4A',
          },
          amber: {
            50: '#FFFDF5',
            100: '#FFF7DE',
            500: '#FFC845',
          }
        }
      },
      fontFamily: {
        heading: ['Fraunces', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'pill': '9999px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(29, 43, 46, 0.05), 0 1px 4px -1px rgba(29, 43, 46, 0.03)',
        'soft': '0 10px 30px -10px rgba(11, 79, 74, 0.08), 0 4px 12px -2px rgba(29, 43, 46, 0.04)',
        'soft-lg': '0 20px 40px -15px rgba(11, 79, 74, 0.12), 0 6px 16px -4px rgba(29, 43, 46, 0.06)',
        'glass': '0 8px 32px 0 rgba(11, 79, 74, 0.07), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
        'glass-dark': '0 10px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'glow-yellow': '0 8px 24px -6px rgba(255, 200, 69, 0.4)',
      },
      animation: {
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'pulse-calm': 'pulseCalm 4s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'breathe-cycle': 'breatheCycle 16s ease-in-out infinite',
        'marker-reveal': 'markerReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseCalm: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breatheCycle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '25%': { transform: 'scale(1.35)', opacity: '1' },
          '50%': { transform: 'scale(1.35)', opacity: '1' },
          '75%': { transform: 'scale(1)', opacity: '0.9' },
        },
        markerReveal: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        }
      }
    },
  },
  plugins: [],
}
