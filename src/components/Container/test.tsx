import { theme } from 'styles';
import { renderWithTheme } from 'helpers/tests/renderWithTheme';

import Container from './Container';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>some content</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.smarthphone.container
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 450px;
        padding-left: calc(1rem / 2);
        padding-right: calc(1rem / 2);
      }

      @media (min-width:450px) {
        .c0 {
          max-width: 800px;
          padding-left: calc(2rem / 2);
          padding-right: calc(2rem / 2);
        }
      }

      @media (min-width:768px) {
        .c0 {
          max-width: 1440px;
          padding-left: calc(4rem / 2);
          padding-right: calc(4rem / 2);
        }
      }

      <div
        class="c0"
      >
        <span>
          some content
        </span>
      </div>
    `);
  });
});
