import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.cyan};
    border-radius: ${theme.border.radius.small};
    border: none;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
  `}
`;
