import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
    width: 100%;
  `}
`;

export const ErrorMessageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    position: relative;
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.cardinal};
    position: absolute;
  `}
`;
