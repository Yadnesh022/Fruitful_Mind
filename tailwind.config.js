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
        brand: {
          plum: {
            50: '#f7f2f9',
            100: '#eee5f3',
            200: '#ddcde8',
            300: '#c5a7d7',
            400: '#a77dc0',
            500: '#905d9e',
            600: '#6b3d81',
            700: '#592d6c', // Logo primary plum
            800: '#462355',
            900: '#341a3f',
            950: '#1e0c26',
          },
          peach: {
            50: '#fef7f4',
            100: '#fbdccd', // Logo soft peach
            200: '#f7b87d', // Logo peach/apricot
            300: '#f89e5d',
            400: '#fa8045',
            500: '#f46026',
            600: '#df4518',
            700: '#b83214',
            800: '#932a17',
            900: '#772518',
          },
          sage: {
            50: '#f5f7f3',
            100: '#e8ece4',
            200: '#d1dbcb',
            300: '#b1c3a8',
            400: '#a5ac6f', // Logo olive/sage
            500: '#78946e', // Logo leafy foliage
            600: '#5c7653',
            700: '#485e42',
            800: '#3c4c37',
            900: '#334030',
          },
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
          canvas: {
            light: '#fdfbf7', // Warm calming cream
            lightAlt: '#fef7f2',
            dark: '#140b19',   // Deep midnight plum
            darkCard: '#1d1024',
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
