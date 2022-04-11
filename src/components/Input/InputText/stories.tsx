import { Story, Meta } from '@storybook/react/types-6-0';

import { ArrowDownIcon } from 'assets/icons';

import InputText, { InputTextProps } from '.';

export default {
  title: 'Cells/InputText',
  component: InputText,
  args: {
    name: 'name',
    label: 'name',
    type: 'text',
    iconPosition: 'right',
    icon: <ArrowDownIcon />,
    register: () => null
  }
} as Meta;

export const InputTextDefault: Story<InputTextProps> = (args) => (
  <InputText {...args} />
);
