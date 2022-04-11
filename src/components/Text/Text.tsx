import {
  ColorStyleProps,
  TextOpacitiesProps,
  TextSizeProps,
  TextWeightProps,
  TextTypesProps
} from 'types/globals';

import { theme } from 'styles';

export type TextProps = {
  children: string;
  type?: TextTypesProps;
  color?: ColorStyleProps;
  opacity?: TextOpacitiesProps;
  size?: TextSizeProps;
  weight?: TextWeightProps;
  isUpperCase?: boolean;
};

const Text = ({
  children,
  color = 'black',
  isUpperCase = false,
  opacity = 'full',
  size = 'default',
  type = 'p',
  weight = 'regular'
}: TextProps) => {
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

export default Text;
