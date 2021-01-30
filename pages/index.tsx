import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { Box } from "@material-ui/core";
import Main from "../components/organisms/main";

export default function Home(): JSX.Element {
  return (
    <Box width="100%">
      <Header />

      <Main />

      <Footer />
    </Box>
  );
}
