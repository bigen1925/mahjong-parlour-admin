import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Main from "../components/organisms/Main";
import { Box } from "@material-ui/core";

export default function Home(): JSX.Element {
  return (
    <Box width="100%">
      <Header />

      <Main />

      <Footer />
    </Box>
  );
}
