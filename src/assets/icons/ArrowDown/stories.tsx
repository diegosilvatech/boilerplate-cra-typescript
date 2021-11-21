import { Story, Meta } from '@storybook/react/types-6-0';

import { ArrowDownIcon, IconType } from '.';

export default {
  title: '@Icon/ArrowDown',
  component: ArrowDownIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const ArrowDownIconDefault: Story<IconType> = (args) => (
  <ArrowDownIcon {...args} />
);
