import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

import normalize from '../normalize/normalize';

type GlobalStylesProps = {
  removeBackgroundColor?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  ${normalize};

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'), url('/fonts/Montserrat-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
  
  html {
    font-size: 50%;
  }

  html,
  body {
    height: 100%;
    font-family: ${({ theme }) => theme.font.family}};
  }

  body {
    font-size: ${({ theme }) => theme.font.sizes.default};
    font-weight: 300;
  }
`;

export default GlobalStyles;
