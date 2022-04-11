import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Molecules/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'button label',
    fullWidth: true
  },
  argTypes: {
    variant: {
      table: {
        category: 'modifiers'
      },
      control: {
        type: 'inline-radio'
      }
    },
    children: {
      table: {
        category: 'custom inputs'
      }
    },
    onClick: {
      table: {
        category: 'custom inputs'
      }
    }
  }
} as Meta;

export const ButtonDefault: Story<ButtonProps> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};
