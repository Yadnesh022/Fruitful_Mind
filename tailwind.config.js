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
        cream: '#FFF7EE',
        papaya: {
          DEFAULT: '#FF7A59',
          deep: '#D9442B',
          50: '#FFF5F2',
          100: '#FFE6DA',
          200: '#FFD7CD',
          300: '#FFB3A1',
          400: '#FF8E75',
          500: '#FF7A59',
          600: '#E85E3B',
          700: '#D9442B',
          800: '#B82E18',
          900: '#8A200F',
        },
        mango: {
          DEFAULT: '#FFB627',
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FFF1CC',
          300: '#FFE294',
          400: '#FFCC52',
          500: '#FFB627',
          600: '#E69910',
          700: '#C27A05',
          800: '#945B00',
        },
        leaf: {
          DEFAULT: '#1FA886',
          deep: '#0F7A62',
          50: '#F0FAF6',
          100: '#DDF5EC',
          200: '#BBE9D8',
          300: '#84D6BC',
          400: '#48BE9D',
          500: '#1FA886',
          600: '#168B6E',
          700: '#0F7A62',
          800: '#0C5B49',
        },
        grape: {
          DEFAULT: '#7C5CFF',
          50: '#F6F4FF',
          100: '#ECE6FF',
          200: '#D6C8FF',
          300: '#B89FFF',
          400: '#9772FF',
          500: '#7C5CFF',
          600: '#643EE8',
          700: '#5029CA',
          800: '#3D1C9F',
        },
        ink: {
          DEFAULT: '#231F2E',
          50: '#F7F6F8',
          100: '#EBE9ED',
          200: '#D3CFD8',
          300: '#B2ACB9',
          400: '#8C8496',
          500: '#6B6677',
          600: '#534E5E',
          700: '#3E3948',
          800: '#2D2836',
          900: '#231F2E',
          950: '#15121D',
        },
        muted: {
          DEFAULT: '#6B6677',
          light: '#8F8A9B',
          dark: '#4D4857',
        },
        tint: {
          peach: '#FFE6DA',
          mint: '#DDF5EC',
          butter: '#FFF1CC',
          lavender: '#ECE6FF',
        },
        dark: {
          bg: '#15121D',
          surface: 'rgba(255, 255, 255, 0.08)',
          card: '#1F1A2B',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        brand: {
          plum: {
            50: '#ECE6FF',
            100: '#E3DAFC',
            200: '#D6C8FF',
            300: '#B89FFF',
            400: '#9772FF',
            500: '#7C5CFF', // Grape
            600: '#643EE8',
            700: '#5029CA',
            800: '#3D1C9F',
            900: '#231F2E', // Ink text
            950: '#15121D', // Dark mode background
          },
          peach: {
            50: '#FFF5F2',
            100: '#FFE6DA', // Tint peach
            200: '#FFD7CD',
            300: '#FFB3A1',
            400: '#FF8E75',
            500: '#FF7A59', // Papaya
            600: '#E85E3B',
            700: '#D9442B', // Papaya Deep
            800: '#B82E18',
            900: '#8A200F',
          },
          sage: {
            50: '#F0FAF6',
            100: '#DDF5EC', // Tint mint
            200: '#BBE9D8',
            300: '#84D6BC',
            400: '#48BE9D',
            500: '#1FA886', // Leaf
            600: '#168B6E',
            700: '#0F7A62', // Leaf Deep
            800: '#0C5B49',
            900: '#084033',
          },
          amber: {
            50: '#FFFDF5',
            100: '#FFF1CC', // Tint butter
            200: '#FFF0C2',
            300: '#FFE294',
            400: '#FFCC52',
            500: '#FFB627', // Mango
            600: '#E69910',
            700: '#C27A05',
          },
          canvas: {
            light: '#FFF7EE', // Background cream
            lightAlt: '#FFE6DA', // Section tint peach
            dark: '#15121D',   // Deep midnight ink
            darkCard: '#1F1A2B',
            darkBorder: 'rgba(255, 255, 255, 0.1)',
          }
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob-float': 'blobFloat 18s ease-in-out infinite',
        'blob-float-delayed': 'blobFloat 22s ease-in-out 4s infinite',
        'blob-float-reverse': 'blobFloatRev 20s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeRev 30s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'breathe-in-out': 'breatheCycle 16s ease-in-out infinite',
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        blobFloatRev: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-35px, 30px) scale(1.05)' },
          '66%': { transform: 'translate(25px, -30px) scale(0.92)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
      },
      boxShadow: {
        'glass-sm': '0 4px 12px 0 rgba(89, 45, 108, 0.05), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6)',
        'glass': '0 8px 32px 0 rgba(89, 45, 108, 0.08), inset 0 1px 2px 0 rgba(255, 255, 255, 0.7)',
        'glass-hover': '0 16px 40px 0 rgba(89, 45, 108, 0.14), inset 0 1px 3px 0 rgba(255, 255, 255, 0.9)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'liquid': '0 10px 30px -5px rgba(107, 61, 129, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.4) inset',
      }
    },
  },
  plugins: [],
}
