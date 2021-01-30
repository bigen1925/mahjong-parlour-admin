import { Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

interface NamedPersonProps {
  name: string;
  iconSize?: number;
  className?: string;
}

export default function NamedPerson(props: NamedPersonProps): JSX.Element {
  return (
    <Box className={props.className} style={{ textAlign: "center" }}>
      <Box>
        <PersonIcon style={{ fontSize: props.iconSize }} />
      </Box>
      <Box m={-1}>{props.name}</Box>
    </Box>
  );
}
