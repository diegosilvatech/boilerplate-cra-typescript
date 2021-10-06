import { ThemeProvider } from 'styled-components';

import { Button } from 'components';
import { theme, GlobalStyles } from 'styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
