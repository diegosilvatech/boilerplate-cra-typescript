import { Story, Meta } from '@storybook/react/types-6-0';
import Container from './Container';

export default {
  title: 'Molecules/Container',
  component: Container,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true }
  }
} as Meta;

export const ContainerDefault: Story = () => {
  return (
    <div style={{ backgroundColor: '#FF478550', border: '2px solid #ED145B' }}>
      <Container>
        <div
          style={{
            backgroundColor: '#FF478550',
            border: '2px solid #ED145B'
          }}
        >
          responsible content
        </div>
      </Container>
    </div>
  );
};
