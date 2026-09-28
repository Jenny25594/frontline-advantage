import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: {
          50: '#E6F9F2',
          100: '#CCF3E6',
          200: '#99E7CC',
          300: '#66DEBC',
          400: '#33D4A3',
          base: '#00C48C',
          600: '#00A86F',
          700: '#008856',
          800: '#006644',
          900: '#004433',
        },
        // Secondary (Navy)
        secondary: {
          50: '#F0F4FB',
          100: '#E6ECFE',
          200: '#C0D4F7',
          300: '#9ABCF0',
          400: '#5B9FF5',
          base: '#2F80ED',
          600: '#1F5ACC',
          700: '#1A3A66',
          800: '#0F2341',
          900: '#0A1F44',
        },
        // Neutral
        neutral: {
          0: '#FFFFFF',
          50: '#F8F9FB',
          100: '#F0F2F7',
          200: '#E8EDF3',
          300: '#D9DFEB',
          400: '#BCCCE0',
          500: '#8B92A0',
          600: '#5F6674',
          700: '#343A40',
          800: '#1F2329',
          900: '#0F1217',
        },
        // Semantic
        success: {
          50: '#D1FAE5',
          base: '#10B981',
          700: '#059669',
        },
        warning: {
          50: '#FEF3C7',
          base: '#F59E0B',
          700: '#D97706',
        },
        error: {
          50: '#FEE2E2',
          base: '#EF4444',
          700: '#DC2626',
        },
        info: {
          50: '#CFFAFE',
          base: '#06B6D4',
          700: '#0891B2',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['12px', { lineHeight: '1.4' }],
        xs: ['14px', { lineHeight: '1.5' }],
        sm: ['16px', { lineHeight: '1.6' }],
        base: ['18px', { lineHeight: '1.6' }],
        lg: ['20px', { lineHeight: '1.5' }],
        xl: ['24px', { lineHeight: '1.4' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.2' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        0: '0px',
        '2xs': '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
