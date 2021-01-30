import { AppProps } from 'next/app';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: green['A200'],
            },
            secondary: {
                main: lightBlue['A200'],
            },
        },
        typography: {
            fontFamily: 'Noto Sans JP, sans-serif',
        },
    });

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
