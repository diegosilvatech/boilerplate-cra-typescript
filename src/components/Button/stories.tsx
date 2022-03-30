import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'button label'
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};
