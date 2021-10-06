import styled, { css, DefaultTheme } from 'styled-components';
import { darken, tint } from 'polished';

import { ButtonProps } from '.';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    border-color: ${theme.colors.black};

    &:hover {
      background: ${darken(0.2, theme.colors.white)};
      color: ${theme.colors.black};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};

    &:hover {
      background: ${tint(0.2, theme.colors.black)};
      color: ${theme.colors.white};
      border-color: ${theme.colors.white};
    }
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    border-radius: ${theme.border.radius.small};
    border: 1px solid;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};

    &:hover {
      cursor: pointer;
    }

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;
