import { Button } from 'components';

import * as s from './styles';

export default function Home() {
  return (
    <s.Wrapper>
      <Button onClick={() => alert('welcome!')}>click me</Button>
    </s.Wrapper>
  );
}
