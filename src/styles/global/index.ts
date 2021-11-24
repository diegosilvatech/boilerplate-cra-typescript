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

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 100;
    src: local('JetBrains Mono Thin'), local('JetBrains-Mono-Thin'), url('/fonts/jetbrainsmono-thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 200;
    src: local('JetBrains Mono Extra-Light'), local('JetBrains-Mono-Extra-Light'), url('/fonts/jetbrainsmono-extralight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 300;
    src: local('JetBrains Mono Light'), local('JetBrains-Mono-Light'), url('/fonts/jetbrainsmono-light.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    src: local('JetBrains Mono Regular'), local('JetBrains-Mono-Regular'), url('/fonts/jetbrainsmono-regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 500;
    src: local('JetBrains Mono Medium'), local('JetBrains-Mono-Medium'), url('/fonts/jetbrainsmono-medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 600;
    src: local('JetBrains Mono Semi Bold'), local('JetBrains-Mono-Semi-Bold'), url('/fonts/jetbrainsmono-semibold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    src: local('JetBrains Mono Bold'), local('JetBrains-Mono-Bold'), url('/fonts/jetbrainsmono-bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 800;
    src: local('JetBrains Mono Extra Bold'), local('JetBrains-Mono-Extra-Bold'), url('/fonts/jetbrainsmono-extrabold.ttf') format('truetype');
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
