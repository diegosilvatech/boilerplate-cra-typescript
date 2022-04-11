import { Story, Meta } from '@storybook/react/types-6-0';

import { Text } from 'components';

import MediaMatch, { MediaMatchProps } from './MediaMatch';

export default {
  title: 'Molecules/MediaMatch',
  component: MediaMatch,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true }
  }
} as Meta;

export const MediaMatchOnMobile: Story<MediaMatchProps> = () => (
  <>
    <small>
      You will only be able to see the text below on devices with a{' '}
      <strong>small</strong> screen.
    </small>
    <MediaMatch lessThan="medium">
      <Text>Text on Mobile</Text>
    </MediaMatch>
  </>
);

export const MediaMatchOnDesktop: Story = () => (
  <>
    <small>
      You will only be able to see the text below on devices with a{' '}
      <strong>large</strong> screen.
    </small>
    <MediaMatch greaterThan="medium">
      <Text>Text on Tablet / Desktop</Text>
    </MediaMatch>
  </>
);
