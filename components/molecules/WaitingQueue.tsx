import { Box, Button, Grid, Modal, Paper } from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { useState } from 'react';
import NamedPerson from '../atoms/NamedPerson';
import { Guest } from '../../prisma/client';

interface WaitingQueueProps {
    waitingGuests: Guest[];
    addWaitingGuests: (guest: Guest) => void;
    removeWaitingGuests: (guest: Guest) => void;
    enterableGuests: Guest[];
    addEnterableGuests: (guest: Guest) => void;
    removeEnterableGuests: (guest: Guest) => void;
}

export default function WaitingQueue(props: WaitingQueueProps): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <Box border={1} borderRight={0} height={90}>
            <Grid container alignItems="center" style={{ height: '100%', textAlign: 'center' }}>
                {props.waitingGuests.map((guest) => (
                    <Grid
                        item
                        xs={1}
                        key={guest.id}
                        onClick={() => {
                            props.removeWaitingGuests(guest);
                            props.addEnterableGuests(guest);
                        }}
                    >
                        <NamedPerson name={guest.lastName} iconSize={50} />
                    </Grid>
                ))}
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                        来店
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            console.log('register!');
                        }}
                    >
                        新規
                    </Button>
                </Grid>
            </Grid>

            <Modal open={open} onClose={() => setOpen(false)}>
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
                        rows={props.enterableGuests}
                        columns={[
                            { field: 'id', width: 70 },
                            { field: 'lastName', width: 200 },
                            { field: 'firstName', width: 200 },
                        ]}
                        onRowClick={(row: RowParams) => {
                            const guest = props.enterableGuests.find((guest) => guest.id === row.getValue('id'))!;
                            props.addWaitingGuests(guest);
                            props.removeEnterableGuests(guest);
                            setOpen(false);
                        }}
                    />
                </Paper>
            </Modal>
        </Box>
    );
}
