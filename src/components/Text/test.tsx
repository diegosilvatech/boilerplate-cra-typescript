import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import Text from '.';

describe('<Text />', () => {
  it('should render the Text component', () => {
    renderWithTheme(<Text aria-label="Text component">text example</Text>);

    expect(screen.getByText('text example')).toBeInTheDocument();
  });
});
