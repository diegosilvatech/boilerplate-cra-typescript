import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from '.';

export default {
  title: 'Atom/Text',
  component: Text,
  parameters: {
    jest: ['Text.test.tsx']
  },
  args: {
    children: 'Text example',
    type: 'p',
    size: 'default',
    weight: 'medium',
    color: 'black',
    opacity: 'full',
    isUpperCase: false
  }
} as Meta;

export const TextDefault: Story<TextProps> = (args) => {
  return (
    <>
      <Text {...args} type="h1" size="display" />
      <Text {...args} type="h2" size="heading" />
      <Text {...args} type="h3" size="extraExtraLarge" />
      <Text {...args} type="h4" size="extraLarge" />
      <Text {...args} type="h5" size="large" />
      <Text {...args} type="p" size="default" />
      <Text {...args} type="p" size="small" />
      <Text {...args} type="span" size="extraSmall" />
    </>
  );
};
