import { Box, Container, Grid } from '@material-ui/core';
import PlayingTable from '../molecules/PlayingTable';
import WaitingQueue from '../molecules/WaitingQueue';

export default function Main(): JSX.Element {
    const player = { name: '山田' };
    const waitingGuest = [player, player, player];
    const tables = [
        { players: [player, player, player, player] },
        { players: [player, player, player, player] },
        { players: [player, player] },
        { players: [] },
    ];

    return (
        <Box component="main">
            {/* 待ち席 */}
            <Box mt={5}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        waiting...
                        <WaitingQueue people={waitingGuest} />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={5}>
                <Container>
                    <Grid container>
                        {tables.map((table) => (
                            <Grid item xs={3}>
                                <PlayingTable players={table.players} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
