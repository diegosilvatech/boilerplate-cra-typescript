import { Story, Meta } from '@storybook/react/types-6-0';

import FormLogin, { FormLoginProps } from '.';

export default {
  title: 'Organisms/FormLogin',
  component: FormLogin,
  onSubmit: () => null
} as Meta;

export const FormLoginDefault: Story<FormLoginProps> = (args) => (
  <FormLogin {...args} />
);
