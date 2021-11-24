import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '.';

export default {
  title: 'Atom/Container',
  component: Container,
  parameters: {
    jest: ['Container.test.tsx']
  }
} as Meta;

export const Default: Story = () => {
  return (
    <div
      style={{ backgroundColor: 'lightcyan', border: '2px solid lightblue' }}
    >
      <Container>
        <div
          style={{
            backgroundColor: 'lightcyan',
            border: '2px solid lightseagreen'
          }}
        >
          responsible content
        </div>
      </Container>
    </div>
  );
};
