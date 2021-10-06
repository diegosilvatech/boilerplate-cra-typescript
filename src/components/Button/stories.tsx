import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'primary'
  }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
