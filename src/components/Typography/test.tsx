import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import Typography from '.';

describe('<Typography />', () => {
  it('should render the Typography component', () => {
    renderWithTheme(
      <Typography aria-label="Typography component">text example</Typography>
    );

    expect(screen.getByText('text example')).toBeInTheDocument();
  });
});
