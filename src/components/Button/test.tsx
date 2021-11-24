import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import { theme } from 'styles';

import Button from '.';

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>button label</Button>);

    expect(
      screen.getByRole('button', { name: /button label/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.black,
      color: theme.colors.white
    });
  });
});
