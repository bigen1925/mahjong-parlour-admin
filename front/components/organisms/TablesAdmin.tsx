import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { Guest, Staff, Table } from '../../domains/models';
import { api } from '../../pages/_app';
import PlayingTables from '../molecules/PlayingTables';
import { WaitingGuestQueue } from '../molecules/WaitingGuestQueue';
import { WorkingStaffQueue } from '../molecules/WorkingStaffQueue';

export const TablesAdmin: FC = () => {
    // 卓
    const [tables, setTables] = useState<Table[] | null>(null);
    useEffect(() => {
        api.getTables().then((tables) => {
            setTables(tables);
        });
    }, []);

    // 待ち客
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
        api.getGuests({ waiting: true, playing: false }).then((waiting) => {
            setWaitingGuests(waiting);
        });
    }, []);

    // 勤務中従業員
    const [workingStaffs, setWorkingStaffs] = useState<Staff[]>([]);
    const addWorkingStaff = async (staff: Staff) => {
        setWorkingStaffs([...workingStaffs, staff]);
        await api.addWorkingStaff(staff.id);
    };
    const removeWorkingStaff = async (staff: Staff) => {
        setWorkingStaffs(workingStaffs.filter((x) => x.id !== staff.id));
        await api.removeWorkingStaff(staff.id);
    };
    useEffect(() => {
        api.getStaffs({ working: true, playing: false }).then((working) => {
            setWorkingStaffs(working);
        });
    }, []);

    return (
        <>
            {/* 待ち席 */}
            <Box mt={5}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        waiting guests
                        <WaitingGuestQueue
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
                                        workingStaffs={workingStaffs}
                                        addWorkingStaff={addWorkingStaff}
                                        removeWorkingStaff={removeWorkingStaff}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Container>
            </Box>

            {/* 勤務中従業員 */}
            <Box mt={5}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        working staffs
                        <WorkingStaffQueue
                            workingStaffs={workingStaffs}
                            addWorkingStaff={addWorkingStaff}
                            removeWorkingStaff={removeWorkingStaff}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
