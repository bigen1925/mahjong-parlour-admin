import { Box, Grid, Typography } from "@material-ui/core";

export default function Main(): JSX.Element {
  return (
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
  );
}
