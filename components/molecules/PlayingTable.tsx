import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    Typography,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import NamedPerson from '../atoms/NamedPerson';
import { Guest } from '../../prisma/client';
import { useEffect, useState } from 'react';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import modalStyles from '../../styles/modal.module.css';

const SEAT = {
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
    FOURTH: 3,
} as const;
type SEAT = typeof SEAT[keyof typeof SEAT];

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

interface PlayingTableProps {
    waitingGuests: Guest[];
    removeWaitingGuest: (guest: Guest) => void;
    addWaitingGuest: (guest: Guest) => void;
}

export default function PlayingTable(props: PlayingTableProps): JSX.Element {
    const [players, setPlayers] = useState<Guest[]>([]);
    const [firstDealer, setFirstDealer] = useState<SEAT | null>(null);
    const [isOpenPlayerAdditionModal, setIsOpenPlayerAdditionModal] = useState(false);
    const [playerAdditionTarget, setPlayerAdditionTarget] = useState<number | null>(null);
    const [isOpenGameStartingModal, setIsOpenGameStartingModal] = useState(false);
    const [isOpenGameFinishingModal, setIsOpenGameFinishingModal] = useState(false);
    const [startedAt, setStartedAt] = useState<Date | null>(null);
    const [ranking, setRanking] = useState<Guest[]>([]);

    useEffect(() => console.log(ranking), [ranking]);

    function removePlayer(target: SEAT) {
        props.addWaitingGuest(players[target]);
        const newPlayers = [...players];
        delete newPlayers[target];
        setPlayers(newPlayers);
    }

    function openPlayerAdditionModal(target: SEAT) {
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
                    {Object.values(SEAT).map((seat) => (
                        <Box key={seat} className={styles[seat]}>
                            {players[seat] ? (
                                <Box onClick={() => removePlayer(seat)}>
                                    <NamedPerson name={players[seat].lastName} iconSize={iconSize} />
                                </Box>
                            ) : (
                                <Box onClick={() => openPlayerAdditionModal(seat)}>
                                    <AddCircleOutlineRoundedIcon style={{ fontSize: iconSize }} />
                                </Box>
                            )}
                        </Box>
                    ))}

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
                    <DataGrid
                        rows={props.waitingGuests}
                        columns={[
                            { field: 'id', width: 70 },
                            { field: 'lastName', width: 200 },
                            { field: 'firstName', width: 200 },
                        ]}
                        onRowClick={(row: RowParams) => {
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

                            const newPlayers = [...players];
                            newPlayers[playerAdditionTarget] = guest;
                            setPlayers(newPlayers);

                            return setIsOpenPlayerAdditionModal(false);
                        }}
                    />
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
                            {Object.values(SEAT).map((seat) => (
                                <Box key={seat} className={styles[seat]}>
                                    {players[seat] ? (
                                        <Box onClick={() => setFirstDealer(seat)}>
                                            <NamedPerson
                                                name={players[seat].lastName}
                                                iconSize={iconSize}
                                                color={seat === firstDealer ? 'primary' : undefined}
                                            />
                                        </Box>
                                    ) : (
                                        <AddCircleOutlineRoundedIcon style={{ fontSize: iconSize }} />
                                    )}
                                </Box>
                            ))}

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
                                const guest = players[seat];
                                return (
                                    <Box key={seat} className={styles[seat]}>
                                        {guest ? (
                                            <Box
                                                onClick={() => {
                                                    if (ranking.indexOf(guest) !== -1) {
                                                        setRanking(ranking.filter((x) => x !== guest));
                                                    } else {
                                                        setRanking([...ranking, guest]);
                                                    }
                                                }}
                                            >
                                                <NamedPerson name={players[seat].lastName} iconSize={iconSize} />
                                                {ranking.indexOf(guest) + 1 + '位'}
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
