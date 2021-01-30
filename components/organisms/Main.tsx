import { Box, Container, Grid } from '@material-ui/core';
import PlayingTable from '../molecules/PlayingTable';
import WaitingQueue from '../molecules/WaitingQueue';

export default function Main(): JSX.Element {
    const yamada = { id: '1', lastName: '山田', firstName: '太郎' };
    const suzuki = { id: '2', lastName: '鈴木', firstName: '花子' };
    const tables = [
        { id: '1', players: [yamada, yamada, suzuki, suzuki] },
        { id: '2', players: [yamada, yamada, suzuki, suzuki] },
        { id: '3', players: [yamada, suzuki] },
        { id: '4', players: [] },
    ];

    return (
        <Box component="main">
            {/* 待ち席 */}
            <Box mt={5}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        waiting...
                        <WaitingQueue />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={5}>
                <Container>
                    <Grid container>
                        {tables.map((table) => (
                            <Grid item xs={3} key={table.id}>
                                <PlayingTable players={table.players} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
