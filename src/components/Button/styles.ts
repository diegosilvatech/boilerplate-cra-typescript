import styled, { css, DefaultTheme } from 'styled-components';
import { darken, tint } from 'polished';

import { ButtonProps } from '.';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background: ${tint(0.2, theme.colors.black)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    &:hover {
      background: ${darken(0.05, theme.colors.white)};
    }
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    border: none;
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    transition: background-color ${theme.transition.fast};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.light};

    &:hover {
      cursor: pointer;
    }

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;
