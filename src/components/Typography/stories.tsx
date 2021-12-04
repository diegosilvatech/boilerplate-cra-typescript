import { Story, Meta } from '@storybook/react/types-6-0';

import Typography, { TypographyProps } from '.';

export default {
  title: 'Atom/Typography',
  component: Typography,
  parameters: {
    jest: ['Typography.test.tsx']
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

export const TypographyDefault: Story<TypographyProps> = (args) => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};
