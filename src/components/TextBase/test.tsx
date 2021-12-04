import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import TextBase from '.';

describe('<TextBase />', () => {
  it('should render the TextBase component', () => {
    renderWithTheme(
      <TextBase aria-label="TextBase component">text example</TextBase>
    );

    expect(screen.getByText('text example')).toBeInTheDocument();
  });
});
