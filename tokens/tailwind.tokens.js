/**
 * Leveraged brand tokens as a Tailwind theme extension.
 * Usage: in tailwind.config.js —
 *   const leveraged = require('./tokens/tailwind.tokens.js');
 *   module.exports = { theme: { extend: leveraged } };
 */
module.exports = {
  colors: {
    navy: {
      100: '#DCE2EA',
      300: '#98A7BC',
      500: '#3E5480',
      700: '#1E2E4F',
      900: '#121C30',
    },
    brass: {
      100: '#F0E4D2',
      300: '#D9B98A',
      500: '#B38A53',
      700: '#96733F',
      900: '#5E4726',
    },
    bone: {
      DEFAULT: '#EFEBE2',
      50: '#F7F5EF',
      0: '#FFFFFF',
      300: '#C7C1B4',
    },
    ink: {
      DEFAULT: '#171310',
      600: '#4A453E',
    },
    success: { DEFAULT: '#5C7A5A', bg: '#E6EBE2' },
    warning: { DEFAULT: '#9C6B2E', bg: '#F1E4CE' },
    error: { DEFAULT: '#8C4A42', bg: '#F0E0DC' },
  },
  fontFamily: {
    display: ['"Source Serif 4"', 'Georgia', 'serif'],
    body: ['"Work Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  },
  fontSize: {
    display: ['72px', { lineHeight: '1.08' }],
    h1: ['48px', { lineHeight: '1.1' }],
    h2: ['34px', { lineHeight: '1.15' }],
    h3: ['24px', { lineHeight: '1.25' }],
    'body-l': ['18px', { lineHeight: '1.55' }],
    body: ['16px', { lineHeight: '1.6' }],
    'body-s': ['14px', { lineHeight: '1.55' }],
    caption: ['12px', { lineHeight: '1.5' }],
    eyebrow: ['12px', { lineHeight: '1.3', letterSpacing: '0.14em' }],
  },
  borderRadius: {
    DEFAULT: '0px',
    none: '0px',
  },
  spacing: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px',
    6: '32px', 7: '48px', 8: '64px', 9: '96px',
  },
};
