import * as s from './styles';

import { ColorStyleProps } from 'types/globals';

export type IconBaseProps = {
  children: React.ReactNode;
  color?: ColorStyleProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: React.MouseEventHandler<HTMLDivElement> | any) => void;
};

const IconBase = ({ children, color, onClick }: IconBaseProps) => (
  <s.Wrapper aria-label="IconBase component" onClick={onClick} color={color}>
    {children}
  </s.Wrapper>
);

export default IconBase;
