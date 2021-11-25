import { theme } from 'styles';

export type ColorStyleProps = keyof typeof theme.colors;

export type TextSizeProps = keyof typeof theme.font.sizes;

export type TextWeightProps = keyof typeof theme.font.weights;

export type TextOpacitiesProps = keyof typeof theme.font.opacities;
