import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

const dartTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

const App = () => {
  return (
    <ThemeProvider theme={dartTheme}>
      <CssBaseline />
      <Container>
        <h1>Hello, World!</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
