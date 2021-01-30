import { Box, Button, Grid, Modal, Paper } from '@material-ui/core';
import { ColDef, DataGrid, RowParams } from '@material-ui/data-grid';
import { useState } from 'react';
import NamedPerson from '../atoms/NamedPerson';

export default function WaitingQueue(): JSX.Element {
    const yamada = { id: '1', lastName: '山田', firstName: '太郎' };
    const suzuki = { id: '2', lastName: '鈴木', firstName: '花子' };
    const guests = [yamada, suzuki];
    const [waitingGuest, setWaitingGuest] = useState<{ id: string; lastName: string; firstName: string }[]>([]);

    const [open, setOpen] = useState(false);

    const columns: ColDef[] = [
        { field: 'id', width: 70 },
        { field: 'lastName', width: 200 },
        { field: 'firstName', width: 200 },
    ];

    return (
        <Box border={1} borderRight={0} height={90}>
            <Grid container alignItems="center" style={{ height: '100%' }}>
                {waitingGuest.map((guest) => (
                    <Grid
                        item
                        xs={1}
                        style={{ textAlign: 'center' }}
                        key={guest.id}
                        onClick={() => {
                            setWaitingGuest(waitingGuest.filter((x) => x.id !== guest.id));
                        }}
                    >
                        <NamedPerson name={guest.lastName} iconSize={50} />
                    </Grid>
                ))}
                <Grid item xs={1} />
                <Grid item xs={1}>
                    <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                        来店
                    </Button>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper
                    style={{
                        width: 400,
                        height: 500,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                    }}
                >
                    <DataGrid
                        rows={guests}
                        columns={columns}
                        onRowClick={(row: RowParams) => {
                            const guest = guests.find((guest) => guest.id === row.getValue('id'))!;
                            waitingGuest.push(guest);
                            setOpen(false);
                        }}
                    />
                </Paper>
            </Modal>
        </Box>
    );
}
