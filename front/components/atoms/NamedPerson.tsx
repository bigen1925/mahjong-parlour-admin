import { Box } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

type NamedPersonProps = {
    name: string;
    iconSize?: number;
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
};

export default function NamedPerson(props: NamedPersonProps): JSX.Element {
    return (
        <Box style={{ textAlign: 'center' }}>
            <Box>
                <PersonIcon style={{ fontSize: props.iconSize }} color={props.color} />
            </Box>
            <Box m={-1}>{props.name}</Box>
        </Box>
    );
}
