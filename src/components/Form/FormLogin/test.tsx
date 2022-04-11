import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/tests/renderWithTheme';

import FormLogin from '.';

describe('<FormLogin />', () => {
  it('should render the FormLogin component', () => {
    renderWithTheme(<FormLogin />);

    expect(screen.getByLabelText('FormLogin component')).toBeInTheDocument();
  });
});
