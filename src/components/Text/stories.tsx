import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from '.';

export default {
  title: 'Atom/Text',
  component: Text,
  parameters: {
    jest: ['Text.test.tsx']
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

export const TextDefault: Story<TextProps> = (args) => {
  const { children } = args;
  return <Text {...args}>{children}</Text>;
};
