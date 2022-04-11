export default {
  colors: {
    primary: '#000000',

    white: '#FFFFFF',
    black: '#000000',

    vampireBlack: '#080808',
    eerieBlack: '#1C1C1C',
    darkCharcoal: '#333333',

    raspberry: '#ED145B',
    cardinal: '#CB1E40',
    sasquatchSocks: '#FF4785',

    philippineYellow: '#FFCB00',
    aqua: '#00E7F9'
  },
  grid: {
    smarthphone: {
      container: '450px',
      gutter: '1rem',
      margin: '2rem'
    },
    tablet: {
      container: '800px',
      gutter: '2rem',
      margin: '6rem'
    },
    desktop: {
      container: '1440px',
      gutter: '4rem',
      margin: '0rem'
    }
  },
  border: {
    radius: {
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
      rounded: '50%'
    }
  },
  font: {
    family:
      "Montserrat, Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      extraSmall: '1.25rem',
      small: '1.625rem',
      default: '2rem',
      large: '2.5rem',
      extraLarge: '3.125rem',
      extraExtraLarge: '3.875rem',
      heading: '4.875rem',
      display: '6.125rem',
      huge: '7.625rem'
    },
    weights: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    },
    opacities: {
      extraSmooth: 0.4,
      smooth: 0.6,
      medium: 0.8,
      full: 1
    }
  },
  spacings: {
    extraSmall: '0.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    extraLarge: '4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
