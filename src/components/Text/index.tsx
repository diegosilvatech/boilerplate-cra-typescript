import {
  ColorStyleProps,
  TextSizeProps,
  TextWeightProps
} from 'core/types/globals';

import { theme } from 'styles';

export type TextProps = {
  children: string;
  color?: ColorStyleProps;
  size?: TextSizeProps;
  weight?: TextWeightProps;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'strong';
};

const Text = ({
  children,
  color = 'black',
  size = 'default',
  type = 'p',
  weight = 'medium'
}: TextProps) => {
  const Element = type;

  return (
    <Element
      style={{
        color: theme.colors[color],
        fontSize: theme.font.sizes[size],
        fontWeight: theme.font.weights[weight]
      }}
    >
      {children}
    </Element>
  );
};

export default Text;
