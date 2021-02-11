import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { Guest, Table } from '../../domains/models';
import * as api from '../../helpers/api';
import PlayingTables from '../molecules/PlayingTables';
import WaitingQueue from '../molecules/WaitingQueue';

const TablesAdmin: FC = () => {
    const [tables, setTables] = useState<Table[] | null>(null);

    const [enterableGuests, setEnterableGuests] = useState<Guest[] | null>(null);
    const addEnterableGuest = (guest: Guest) => enterableGuests && setEnterableGuests([...enterableGuests, guest]);
    const removeEnterableGuest = (guest: Guest) =>
        enterableGuests && setEnterableGuests(enterableGuests.filter((x) => x.id !== guest.id));

    const [waitingGuests, setWaitingGuests] = useState<Guest[]>([]);
    const addWaitingGuest = async (guest: Guest) => {
        setWaitingGuests([...waitingGuests, guest]);
        await api.addWaitingGuest(guest.id);
    };
    const removeWaitingGuest = async (guest: Guest) => {
        setWaitingGuests(waitingGuests.filter((x) => x.id !== guest.id));
        await api.removeWaitingGuest(guest.id);
    };

    useEffect(() => {
        api.getGuests(false, false).then((guests) => {
            setEnterableGuests(guests);
        });
    }, []);

    useEffect(() => {
        api.getGuests(true, false).then((waiting) => {
            setWaitingGuests(waiting);
        });
    }, []);

    useEffect(() => {
        api.getTables().then((tables) => {
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
                    {!tables ? (
                        <Box>
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : (
                        <Grid container>
                            {tables.map((table) => (
                                <Grid item xs={3} key={table.id}>
                                    <PlayingTables
                                        table={table}
                                        waitingGuests={waitingGuests}
                                        addWaitingGuest={addWaitingGuest}
                                        removeWaitingGuest={removeWaitingGuest}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default TablesAdmin;
