import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render the button label', () => {
    render(<Button />);

    expect(
      screen.getByRole('button', { name: /button label/i })
    ).toBeInTheDocument();
  });
});
