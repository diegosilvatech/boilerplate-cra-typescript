import { ThemeProvider } from 'styled-components';

import { Button } from 'components';
import { theme, GlobalStyles } from 'styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
