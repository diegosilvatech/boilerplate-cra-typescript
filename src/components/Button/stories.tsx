import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Atom/Button',
  component: Button,
  args: {
    variant: 'primary'
  },
  parameters: {
    jest: ['Button.test.tsx']
  }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
