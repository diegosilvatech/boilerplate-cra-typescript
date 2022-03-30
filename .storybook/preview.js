import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackgroundColor />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  a11y: { disable: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: theme.colors.white
      },
      {
        name: 'black',
        value: theme.colors.black
      }
    ]
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
}
