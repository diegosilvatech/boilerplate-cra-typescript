import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps, icons } from './Icon';

export default {
  title: 'Molecules/Icon',
  component: Icon,
  args: {
    name: 'arrowDown',
    color: 'primary'
  },
  argTypes: {
    name: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'select'
      },
      options: Object.keys(icons)
    },
    color: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta;

export const IconDefault: Story<IconProps> = (args) => <Icon {...args} />;
