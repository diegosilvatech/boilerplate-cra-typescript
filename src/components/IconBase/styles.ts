import styled, { css } from 'styled-components';

import { IconBaseProps } from './IconBase';

export const Wrapper = styled.div<IconBaseProps>`
  ${({ theme, color = 'primary' }) => css`
    display: flex;
    color: ${theme.colors[color]};
  `}
`;
