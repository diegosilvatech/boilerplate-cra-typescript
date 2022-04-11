import { Form, Container } from 'components';

import * as s from './styles';

export default function Home() {
  return (
    <s.Wrapper>
      <Container>
        <Form.FormLogin onSubmit={() => null} />
      </Container>
    </s.Wrapper>
  );
}
