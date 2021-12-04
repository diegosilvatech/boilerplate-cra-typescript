import {
  ColorStyleProps,
  TextOpacitiesProps,
  TextSizeProps,
  TextWeightProps
} from 'core/types/globals';

import { theme } from 'styles';

export type TypographyProps = {
  children: string;
  color?: ColorStyleProps;
  isUpperCase?: boolean;
  opacity?: TextOpacitiesProps;
  size?: TextSizeProps;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'strong';
  weight?: TextWeightProps;
};

const Typography = ({
  children,
  color = 'black',
  isUpperCase = false,
  opacity = 'strong',
  size = 'default',
  type = 'p',
  weight = 'medium'
}: TypographyProps) => {
  const Element = type;

  return (
    <Element
      style={{
        color: theme.colors[color],
        fontSize: theme.font.sizes[size],
        fontWeight: theme.font.weights[weight],
        opacity: theme.font.opacities[opacity]
      }}
    >
      {isUpperCase ? children.toUpperCase() : children}
    </Element>
  );
};

export default Typography;
