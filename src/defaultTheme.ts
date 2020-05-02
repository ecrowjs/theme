import { ITheme } from './ITheme';

const font = {
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: '0.9125rem',
  fontStyle: 'normal',
  fontWeight: 400,
  opacity: 1,
};

const defaultTheme: ITheme = {
  color: {
    base: {
      background: 'lightgray',
      font: 'black',
    },
    creative: {
      background: 'forestgreen',
      font: 'white',
    },
    destructive: {
      background: 'firebrick',
      font: 'white',
    },
    negative: {
      background: 'darkred',
      font: 'white',
    },
    neutral: {
      background: 'dimgrey',
      font: 'white',
    },
    positive: {
      background: 'royalblue',
      font: 'white',
    },
  },
  font: {
    base: font,
    heading1: {
      ...font,
      fontSize: '1.6rem',
    },
    heading2: {
      ...font,
      fontSize: '1.4rem',
    },
    heading3: {
      ...font,
      fontSize: '1.2rem',
    },
    paragraph: font,
    quote: {
      ...font,
      fontStyle: 'italic',
      opacity: 0.7,
    },
    small: {
      ...font,
      fontSize: '0.75rem',
    },
    subheading: {
      ...font,
      fontSize: '1.15rem',
    },
    subtitle: {
      ...font,
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    title: {
      ...font,
      fontSize: '1.7rem',
      fontWeight: 700,
    },
  },
  shadow: [
    '0 0 0 transparent',
    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  ],
  shape: {
    border: {
      radius: 4,
      thickness: 1,
    },
  },
  touchable: {
    active: {
      filter: 'brightness(80%)',
    },
    disabled: {
      opacity: 0.6,
      pointerEvents: 'none',
      userSelect: 'none',
    },
    hover: {
      boxShadow:
        '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
      cursor: 'pointer',
      filter: 'brightness(130%)',
    },
    idle: {
      cursor: 'pointer',
      filter: 'brightness(100%)',
      transition: 'all 300ms',
    },
  },
  transition: {
    duration: {
      complex: 375,
      entering: 225,
      leaving: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300,
    },
    ease: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      out: 'cubic-bezier(0.0, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

export default defaultTheme;
