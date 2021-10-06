import { addDecorator } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackgroundColor />
      <Story />
    </ThemeProvider>
  )
];

import results from '../.jest-test-results.json';

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

addDecorator(withTests({ results }));
