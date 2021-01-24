import { AppProps } from "next/app";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { green, lightBlue } from "@material-ui/core/colors";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: green["A200"],
      },
      secondary: {
        main: lightBlue["A200"],
      },
    },
  });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
