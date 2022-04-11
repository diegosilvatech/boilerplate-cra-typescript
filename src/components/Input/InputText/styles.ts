import styled, { css } from 'styled-components';

import { InputTextProps } from '.';

type IconPositionProps = Pick<InputTextProps, 'iconPosition'>;

export const Wrapper = styled.div`
  ${() => css``}
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.extraSmall};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.default};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.black};
  `}
`;

export const FieldTextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius.small};
    padding: 0 ${theme.spacings.small};
    border: 0.25rem solid;
    &:focus-within {
      box-shadow: 0 0 0.25rem ${theme.colors.primary};
    }
  `}
`;

export const FieldText = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    padding: ${theme.spacings.medium} 0;
    padding-${iconPosition}: ${theme.spacings.small};
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    max-height: 6rem;
  `}
`;

export const IconWrapper = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    order: ${iconPosition === 'right' ? 1 : 0};
  `}
`;
