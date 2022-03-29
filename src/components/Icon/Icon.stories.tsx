import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps, icons } from './Icon.component';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    jest: ['Icon.test.tsx']
  },
  args: {
    name: 'arrowDown',
    color: 'primary'
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: {
        type: 'select'
      }
    }
  }
} as Meta;

export const IconDefault: Story<IconProps> = (args) => <Icon {...args} />;
