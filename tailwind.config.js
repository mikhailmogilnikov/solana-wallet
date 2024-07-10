import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        base: '2px 4px 12px #00000014',
        hover: '2px 4px 16px #00000029',
      },
      animation: {
        preloaderPulse: 'preloadPulse 2s linear infinite',
        appear: 'appear linear',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      keyframes: {
        preloadPulse: {
          '0%': { opacity: '0.09' },
          '50%': { opacity: '0.14' },
          '100%': { opacity: '0.09' },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f5f5f7',
            foreground: '#11181C',
            divider: 'rgba(17, 17, 17, 0.15)',
            focus: '#11181C',
            default: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#000000',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: 'black',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            focus: '#ECEDEE',
            divider: 'rgba(255, 255, 255, 0.15)',
            default: {
              DEFAULT: 'rgb(39, 39, 42)',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            secondary: {
              DEFAULT: 'white',
              foreground: '#000000',
            },
            danger: {
              500: '#7f1c1d',
              DEFAULT: '#7f1c1d',
              foreground: 'white',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: 'white',
            },
          },
        },
      },
    }),
  ],
};
