import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router';
import router from './components/Routes';

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
        <RouterProvider router={router} />
      </Container>  
    </ThemeProvider>
  );
};

export default App;
