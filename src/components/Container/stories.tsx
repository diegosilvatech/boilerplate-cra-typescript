import { Story, Meta } from '@storybook/react/types-6-0';
import Container from './Container';

export default {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true }
  }
} as Meta;

export const ContainerDefault: Story = () => {
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
