import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { theme } from 'styles';

import Button from '.';

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button />);

    expect(
      screen.getByRole('button', { name: /button label/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.white,
      color: theme.colors.black
    });
  });
});
