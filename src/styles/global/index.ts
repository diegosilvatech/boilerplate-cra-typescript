import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

import normalize from '../normalize';

type GlobalStylesProps = {
  removeBackgroundColor?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  ${normalize};

  
  html {
    font-size: 50%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: 300;
  }
`;

export default GlobalStyles;
