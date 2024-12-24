import {Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import React from 'react';
import {RouterProvider} from 'react-router';
import router from './components/Routes';
import {ApolloProvider} from "@apollo/client";
import client from "./constants/apollo-client";

const dartTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={dartTheme}>
                <CssBaseline/>
                <Container>
                    <RouterProvider router={router}/>
                </Container>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
