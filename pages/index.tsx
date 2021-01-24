import Head from "next/head";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { Box, Grid, Typography } from "@material-ui/core";

export default function Home(): JSX.Element {
  return (
    <Box width="100%">
      <Head>
        <title>雀荘管理システム</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          key="viewport"
        />
      </Head>

      <Header />

      <Box component="main">
        <Grid container justify="flex-end">
          <Grid item xs={8}>
            <Box border={1} borderRight={0} height={80} />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Typography variant="h1">雀荘管理アプリです</Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
