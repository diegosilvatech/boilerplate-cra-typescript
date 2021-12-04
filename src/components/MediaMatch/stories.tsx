import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography } from 'components';

import MediaMatch, { MediaMatchProps } from '.';

export default {
  title: 'Atom/MediaMatch',
  component: MediaMatch,
  parameters: {
    jest: ['MediaMatch.test.tsx']
  }
} as Meta;

export const MediaMatchOnMobile: Story<MediaMatchProps> = () => (
  <>
    <small>
      You will only be able to see the text below on devices with a{' '}
      <strong>small</strong> screen.
    </small>
    <MediaMatch lessThan="medium">
      <Typography>Text on Mobile</Typography>
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
      <Typography>Text on Tablet / Desktop</Typography>
    </MediaMatch>
  </>
);
