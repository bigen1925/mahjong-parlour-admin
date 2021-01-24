import "../styles/globals.css";
import { AppProps } from "next/app";
import { CssBaseline } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
