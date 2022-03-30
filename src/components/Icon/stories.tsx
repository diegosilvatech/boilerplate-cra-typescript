import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps, icons } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
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
