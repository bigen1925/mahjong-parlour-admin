import { Box, Button, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Named } from '../../domains/interfaces/Named';

interface WaitingQueueProps {
    people: Named[];
}

export default function WaitingQueue(props: WaitingQueueProps): JSX.Element {
    return (
        <Box border={1} borderRight={0} height={80}>
            <Grid container alignItems="center">
                {props.people.map((person) => (
                    <Grid item xs={1} style={{ textAlign: 'center' }}>
                        <Box>
                            <PersonIcon style={{ fontSize: 60 }} />
                        </Box>
                        <Box m={-1}>{person.name}</Box>
                    </Grid>
                ))}
                <Grid item xs={1} />
                <Grid item xs={1}>
                    <Button variant="contained" color="secondary">
                        来店
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
