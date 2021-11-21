export default {
  colors: {
    primary: '#ED145B',

    white: '#FFFFFF',
    black: '#000000',
    storybookDark: '#333333',
    storybook: '#FF4785',
    fiap: '#ED145B',
    digitalHouse: '#CB1E40'
  },
  grid: {
    desktop: {
      container: '1120px',
      gutter: '4rem',
      margin: '0rem'
    },
    tablet: {
      container: '800px',
      gutter: '2rem',
      margin: '6rem'
    },
    smarthphone: {
      container: '352px',
      gutter: '1rem',
      margin: '2rem'
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
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      small: '1.75rem',
      medium: '2rem',
      large: '2.5rem',
      extraLarge: '3rem',
      extraExtraLarge: '4rem'
    },
    weights: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 600,
      black: 700
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
