import { Box, Button, CircularProgress, Dialog, Grid } from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { useState } from 'react';
import { Guest } from '../../domains/models';
import { getGuests } from '../../helpers/api';
import NamedPerson from '../atoms/NamedPerson';

interface WaitingQueueProps {
    waitingGuests: Guest[];
    addWaitingGuest: (guest: Guest) => Promise<void>;
    removeWaitingGuest: (guest: Guest) => Promise<void>;
}

export default function WaitingQueue(props: WaitingQueueProps): JSX.Element {
    const [open, setOpen] = useState(false);
    const [enterableGuests, setEnterableGuests] = useState<Guest[] | null>(null);

    function letGuestIn(row: RowParams) {
        const guest = enterableGuests!.find((guest) => guest.id === row.getValue('id'))!;
        props.addWaitingGuest(guest).then(() => setOpen(false));
    }

    function onClickEnter() {
        setEnterableGuests(null);
        setOpen(true);
        getGuests({ waiting: false, playing: false }).then((guests) => setEnterableGuests(guests));
    }

    return (
        <Box border={1} borderRight={0} height={90}>
            <Grid container alignItems="center" style={{ height: '100%', textAlign: 'center' }}>
                {props.waitingGuests.map((guest) => (
                    <Grid item xs={1} key={guest.id} onClick={() => props.removeWaitingGuest(guest)}>
                        <NamedPerson name={guest.lastName} iconSize={50} />
                    </Grid>
                ))}
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <Button variant="contained" color="secondary" onClick={onClickEnter}>
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

            {/* 来店時のモーダル */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box height={500} width={400}>
                    {enterableGuests === null ? (
                        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : (
                        <>
                            <DataGrid
                                rows={enterableGuests}
                                columns={[
                                    { field: 'id', width: 70 },
                                    { field: 'lastName', width: 200 },
                                    { field: 'firstName', width: 200 },
                                ]}
                                onRowClick={letGuestIn}
                            />
                        </>
                    )}
                </Box>
            </Dialog>
        </Box>
    );
}
