import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.grid.smarthphone.container};
    padding-left: calc(${theme.grid.smarthphone.gutter} / 2);
    padding-right: calc(${theme.grid.smarthphone.gutter} / 2);

    ${media.greaterThan('small')`
      max-width: ${theme.grid.tablet.container};
      padding-left: calc(${theme.grid.tablet.gutter} / 2);
      padding-right: calc(${theme.grid.tablet.gutter} / 2);
    `}

    ${media.greaterThan('medium')`
      max-width: ${theme.grid.desktop.container};
      padding-left: calc(${theme.grid.desktop.gutter} / 2);
      padding-right: calc(${theme.grid.desktop.gutter} / 2);
    `}
  `}
`;

export default Container;
