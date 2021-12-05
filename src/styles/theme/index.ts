export default {
  colors: {
    primary: '#000000',

    white: '#FFFFFF',
    black: '#000000'
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
      "'JetBrains Mono', Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      extraSmall: '1.12rem',
      small: '1.4rem',
      default: '1.75rem',
      large: '2.1875rem',
      extraLarge: '2.735rem',
      extraExtraLarge: '3.4175rem',
      heading: '4.2725rem',
      display: '5.34rem'
    },
    weights: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
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
