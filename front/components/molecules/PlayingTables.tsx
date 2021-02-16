import {
    AppBar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    Tab,
    Tabs,
    Typography,
} from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { useState } from 'react';
import { SEAT } from '../../domains/constants';
import { Guest, Player, Staff, Table } from '../../domains/models';
import { api } from '../../pages/_app';
import modalStyles from '../../styles/modal.module.css';
import NamedPerson from '../atoms/NamedPerson';

interface PlayingTableProps {
    table: Table;
    waitingGuests: Guest[];
    removeWaitingGuest: (guest: Guest) => Promise<void>;
    addWaitingGuest: (guest: Guest) => Promise<void>;
    workingStaffs: Staff[];
    addWorkingStaff: (staff: Staff) => Promise<void>;
    removeWorkingStaff: (staff: Staff) => Promise<void>;
}

export default function PlayingTables(props: PlayingTableProps): JSX.Element {
    const initialPlayersMap = new Map(props.table.players.map((player) => [player.seat!, player]));
    const [playersMap, setPlayersMap] = useState<Map<SEAT, Player>>(initialPlayersMap);
    const [firstDealer, setFirstDealer] = useState<SEAT | null>(null);
    const [isOpenPlayerAdditionModal, setIsOpenPlayerAdditionModal] = useState(false);
    const [playerAdditionTarget, setPlayerAdditionTarget] = useState<SEAT | null>(null);
    const [isOpenGameStartingModal, setIsOpenGameStartingModal] = useState(false);
    const [isOpenGameFinishingModal, setIsOpenGameFinishingModal] = useState(false);
    const [startedAt, setStartedAt] = useState<Date | null>(null);
    const [ranking, setRanking] = useState<Player[]>([]);
    const [tab, setTab] = useState<'tab-guest' | 'tab-staff'>('tab-guest');

    function handleTabChange(_: unknown, newValue: 'tab-guest' | 'tab-staff') {
        setTab(newValue);
    }

    function removePlayer(seat: SEAT) {
        const player = playersMap.get(seat)!;

        if (player.guest) {
            props.addWaitingGuest(player.guest);
        }

        if (player.staff) {
            props.addWorkingStaff(player.staff);
        }

        api.updatePlayer(player.id, { tableId: null, seat: null }).then(() => {
            const newMap = new Map(playersMap);
            newMap.delete(seat);
            setPlayersMap(newMap);
        });
    }

    function addGuestPlayer(row: RowParams) {
        console.log('addGuestPlayer');
        if (playerAdditionTarget === null) {
            alert('席が選択されていません');
            return setIsOpenPlayerAdditionModal(false);
        }

        const id = row.getValue('id') as string;
        const guest = props.waitingGuests.find((x) => x.id === id);
        if (!guest) {
            alert('ゲストが待ち席にいませんでした');
            return setIsOpenPlayerAdditionModal(false);
        }

        props.removeWaitingGuest(guest);
        api.updateGuestPlayer(guest.id, { tableId: props.table.id, seat: playerAdditionTarget }).then((player) => {
            const newMap = new Map(playersMap);
            newMap.set(playerAdditionTarget, player);
            setPlayersMap(newMap);
            setIsOpenPlayerAdditionModal(false);
        });
    }

    function addStaffPlayer(row: RowParams) {
        console.log('addStaffPlayer');
        if (playerAdditionTarget === null) {
            alert('席が選択されていません');
            return setIsOpenPlayerAdditionModal(false);
        }

        const id = row.getValue('id') as string;
        const staff = props.workingStaffs.find((x) => x.id === id);
        if (!staff) {
            alert('従業員が勤務中ではありません');
            return setIsOpenPlayerAdditionModal(false);
        }

        props.removeWorkingStaff(staff);
        api.updateStaffPlayer(staff.id, { tableId: props.table.id, seat: playerAdditionTarget }).then((player) => {
            const newMap = new Map(playersMap);
            newMap.set(playerAdditionTarget, player);
            setPlayersMap(newMap);
            setIsOpenPlayerAdditionModal(false);
        });
    }

    function openPlayerAdditionModal(target: SEAT) {
        setTab('tab-guest');
        setPlayerAdditionTarget(target);
        setIsOpenPlayerAdditionModal(true);
    }

    // styles
    const iconSize = 50;
    const styles = useStyle();

    return (
        <>
            <Box style={{ textAlign: 'center' }}>
                <Box style={{ position: 'relative', height: 150, width: 150 }} mx="auto">
                    {/* 席 */}
                    {Object.values(SEAT).map((seat) => {
                        if (!playersMap.has(seat)) {
                            return (
                                <Box key={seat} className={styles[seat]} onClick={() => openPlayerAdditionModal(seat)}>
                                    <AddCircleOutlineRoundedIcon style={{ fontSize: iconSize }} />
                                </Box>
                            );
                        }
                        const player = playersMap.get(seat)!;
                        return (
                            <Box key={seat} className={styles[seat]} onClick={() => removePlayer(seat)}>
                                <NamedPerson
                                    name={(player.guest || player.staff).lastName}
                                    iconSize={iconSize}
                                    color={player.staff ? 'action' : undefined}
                                />
                            </Box>
                        );
                    })}

                    {/* 中央のテーブル */}
                    <Box
                        onClick={() => {
                            startedAt ? setIsOpenGameFinishingModal(true) : setIsOpenGameStartingModal(true);
                        }}
                    >
                        <CheckBoxOutlineBlankIcon
                            display="block"
                            className={styles.table}
                            color={startedAt ? 'primary' : undefined}
                        />
                    </Box>
                </Box>
                {startedAt ? startedAt.toLocaleTimeString() + ' ~' : ''}
            </Box>

            {/* プレイヤー追加時のモーダル */}
            <Dialog open={isOpenPlayerAdditionModal} onClose={() => setIsOpenPlayerAdditionModal(false)}>
                <Box height={500} width={400}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={tab}
                            onChange={handleTabChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="fullWidth"
                        >
                            <Tab value="tab-guest" label="お客様" />
                            <Tab value="tab-staff" label="従業員" />
                        </Tabs>
                    </AppBar>
                    <Box hidden={tab !== 'tab-guest'} height="100%">
                        <DataGrid
                            rows={props.waitingGuests}
                            columns={[
                                { field: 'id', width: 70 },
                                { field: 'lastName', width: 200 },
                                { field: 'firstName', width: 200 },
                            ]}
                            onRowClick={addGuestPlayer}
                        />
                    </Box>
                    <Box hidden={tab !== 'tab-staff'} height="100%">
                        <DataGrid
                            rows={props.workingStaffs}
                            columns={[
                                { field: 'id', width: 70 },
                                { field: 'lastName', width: 200 },
                                { field: 'firstName', width: 200 },
                            ]}
                            onRowClick={addStaffPlayer}
                        />
                    </Box>
                </Box>
            </Dialog>

            {/* ゲーム開始時のモーダル */}
            <Dialog
                open={isOpenGameStartingModal}
                onClose={() => setIsOpenGameStartingModal(false)}
                className={modalStyles.dialog}
            >
                <DialogTitle>ゲームを開始します</DialogTitle>
                <DialogContent>
                    <Box mb={5}>
                        <Typography variant="h5">起家を選択してください</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" mb={5}>
                        <Box style={{ position: 'relative', height: 150, width: 150 }}>
                            {/* 席 */}
                            {Object.values(SEAT).map((seat) => {
                                if (!playersMap.has(seat)) {
                                    return (
                                        <Box key={seat} className={styles[seat]}>
                                            <AddCircleOutlineRoundedIcon style={{ fontSize: iconSize }} />
                                        </Box>
                                    );
                                }
                                const player = playersMap.get(seat)!;
                                return (
                                    <Box key={seat} className={styles[seat]} onClick={() => setFirstDealer(seat)}>
                                        <NamedPerson
                                            name={(player.guest || player.staff).lastName}
                                            iconSize={iconSize}
                                            color={seat === firstDealer ? 'primary' : undefined}
                                        />
                                    </Box>
                                );
                            })}

                            {/* 中央のテーブル */}
                            <CheckBoxOutlineBlankIcon display="block" className={styles.table} />
                        </Box>
                    </Box>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                if (firstDealer === null) {
                                    alert('起家が選択されていません');
                                    return;
                                }
                                setStartedAt(new Date());
                                setIsOpenGameStartingModal(false);
                            }}
                        >
                            ゲーム開始
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

            {/* ゲーム終了時のモーダル */}
            <Dialog
                open={isOpenGameFinishingModal}
                onClose={() => setIsOpenGameFinishingModal(false)}
                style={{ textAlign: 'center' }}
            >
                <DialogTitle>ゲームを終了します</DialogTitle>

                <DialogContent>
                    <Box mb={5}>
                        <Typography variant="h5">順位を入力してください</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" mb={5}>
                        <Box style={{ position: 'relative', height: 150, width: 150 }}>
                            {/* 席 */}
                            {Object.values(SEAT).map((seat) => {
                                const player = playersMap.get(seat);
                                return (
                                    <Box key={seat} className={styles[seat]}>
                                        {player ? (
                                            <Box
                                                onClick={() => {
                                                    if (ranking.indexOf(player) !== -1) {
                                                        setRanking(ranking.filter((x) => x !== player));
                                                    } else {
                                                        setRanking([...ranking, player]);
                                                    }
                                                }}
                                            >
                                                <NamedPerson
                                                    name={(player.guest || player.staff).lastName}
                                                    iconSize={iconSize}
                                                />
                                                {ranking.indexOf(player) + 1 + '位'}
                                            </Box>
                                        ) : (
                                            <AddCircleOutlineRoundedIcon style={{ fontSize: iconSize }} />
                                        )}
                                    </Box>
                                );
                            })}

                            {/* 中央のテーブル */}
                            <CheckBoxOutlineBlankIcon display="block" className={styles.table} />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            if (playersMap.size !== ranking.length) {
                                alert('順位が入力されていないプレイヤーがいます。');
                                return;
                            }
                            setRanking([]);
                            setStartedAt(null);
                            setIsOpenGameFinishingModal(false);
                        }}
                    >
                        ゲーム終了
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const useStyle = makeStyles({
    // 1席左上
    [SEAT.FIRST]: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    // 2席右上
    [SEAT.SECOND]: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    // 3席右下
    [SEAT.THIRD]: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    // 4席左下
    [SEAT.FOURTH]: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    // 卓
    table: {
        transform: 'rotate(45deg)',
        fontSize: 80,
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
    },
});
