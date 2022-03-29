import { Button, Container } from 'components';

import * as s from './Home.styles';

export default function Home() {
  return (
    <s.Wrapper>
      <Container>
        <Button onClick={() => alert('welcome!')}>click me</Button>
      </Container>
    </s.Wrapper>
  );
}
