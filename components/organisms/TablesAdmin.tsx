import { Box, Container, Grid } from '@material-ui/core';
import PlayingTable from '../molecules/PlayingTable';
import WaitingQueue from '../molecules/WaitingQueue';
import { useEffect, useState } from 'react';
import { Guest, Table } from '../../prisma/client';
import { getGuests, getTables } from '../../helpers/api';

export default function TablesAdmin(): JSX.Element {
    const [tables, setTables] = useState<Table[]>([]);

    const [enterableGuests, setEnterableGuests] = useState<Guest[] | null>(null);
    const addEnterableGuest = (guest: Guest) => enterableGuests && setEnterableGuests([...enterableGuests, guest]);
    const removeEnterableGuest = (guest: Guest) =>
        enterableGuests && setEnterableGuests(enterableGuests.filter((x) => x.id !== guest.id));

    const [waitingGuests, setWaitingGuests] = useState<Guest[]>([]);
    const addWaitingGuest = (guest: Guest) => setWaitingGuests([...waitingGuests, guest]);
    const removeWaitingGuest = (guest: Guest) => setWaitingGuests(waitingGuests.filter((x) => x.id !== guest.id));

    useEffect(() => {
        getGuests().then((guests) => {
            console.log(guests);
            setEnterableGuests(guests);
        });
    }, []);

    useEffect(() => {
        getTables().then((tables) => {
            console.log(tables);
            setTables(tables);
        });
    }, []);

    return (
        <>
            {/* 待ち席 */}
            <Box mt={5}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        waiting guests
                        <WaitingQueue
                            enterableGuests={enterableGuests}
                            addEnterableGuest={addEnterableGuest}
                            removeEnterableGuest={removeEnterableGuest}
                            waitingGuests={waitingGuests}
                            addWaitingGuest={addWaitingGuest}
                            removeWaitingGuest={removeWaitingGuest}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* 卓 */}
            <Box mt={5}>
                <Container>
                    <Grid container>
                        {tables.map((table) => (
                            <Grid item xs={3} key={table.id}>
                                <PlayingTable
                                    waitingGuests={waitingGuests}
                                    addWaitingGuest={addWaitingGuest}
                                    removeWaitingGuest={removeWaitingGuest}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
