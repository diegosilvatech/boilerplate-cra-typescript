import { Story, Meta } from '@storybook/react/types-6-0';

import TextBase, { TextBaseProps } from '.';

export default {
  title: 'Atom/TextBase',
  component: TextBase,
  parameters: {
    jest: ['TextBase.test.tsx']
  },
  args: {
    children: 'text example',
    type: 'p',
    size: 'default',
    weight: 'medium',
    color: 'black',
    opacity: 'strong',
    isUpperCase: false
  }
} as Meta;

export const TextBaseDefault: Story<TextBaseProps> = (args) => {
  const { children } = args;
  return <TextBase {...args}>{children}</TextBase>;
};
