import { Box, Button, CircularProgress, Dialog, Grid } from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { useState } from 'react';
import NamedPerson from '../atoms/NamedPerson';
import { Guest } from '../../prisma/client';

interface WaitingQueueProps {
    waitingGuests: Guest[];
    addWaitingGuest: (guest: Guest) => void;
    removeWaitingGuest: (guest: Guest) => void;
    enterableGuests: Guest[] | null;
    addEnterableGuest: (guest: Guest) => void;
    removeEnterableGuest: (guest: Guest) => void;
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
                            props.removeWaitingGuest(guest);
                            props.addEnterableGuest(guest);
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

            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box height={500} width={400}>
                    {props.enterableGuests === null ? (
                        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : (
                        <>
                            <DataGrid
                                rows={props.enterableGuests}
                                columns={[
                                    { field: 'id', width: 70 },
                                    { field: 'lastName', width: 200 },
                                    { field: 'firstName', width: 200 },
                                ]}
                                onRowClick={(row: RowParams) => {
                                    const guest = props.enterableGuests!.find(
                                        (guest) => guest.id === row.getValue('id')
                                    );
                                    if (!guest) {
                                        alert('ゲストが入店可能な状態ではありません');
                                        return setOpen(false);
                                    }

                                    props.addWaitingGuest(guest);
                                    props.removeEnterableGuest(guest);
                                    return setOpen(false);
                                }}
                            />
                        </>
                    )}
                </Box>
            </Dialog>
        </Box>
    );
}
