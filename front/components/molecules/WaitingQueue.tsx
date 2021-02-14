import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { ChangeEvent, useState } from 'react';
import { GENDER } from '../../domains/constants';
import { Guest } from '../../domains/models';
import { api } from '../../pages/_app';
import NamedPerson from '../atoms/NamedPerson';

interface WaitingQueueProps {
    waitingGuests: Guest[];
    addWaitingGuest: (guest: Guest) => Promise<void>;
    removeWaitingGuest: (guest: Guest) => Promise<void>;
}

export default function WaitingQueue(props: WaitingQueueProps): JSX.Element {
    const [enterDialogOpen, setEnterDialogOpen] = useState(false);
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
    const [enterableGuests, setEnterableGuests] = useState<Guest[] | null>(null);
    const [registerDisabled, setRegisterDisabled] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState<GENDER>(GENDER.MALE);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    function letGuestIn(row: RowParams) {
        const guest = enterableGuests!.find((guest) => guest.id === row.getValue('id'))!;
        props.addWaitingGuest(guest).then(() => setEnterDialogOpen(false));
    }

    function onClickEnter() {
        setEnterableGuests(null);
        setEnterDialogOpen(true);
        api.getGuests({ waiting: false, playing: false }).then((guests) => setEnterableGuests(guests));
    }

    function register() {
        setRegisterDisabled(true);
        api.createGuest({ lastName, firstName, gender, email, address }).then(() => {
            setEnterDialogOpen(false);
        });
    }

    const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
    const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const handleChangeGender = (event: ChangeEvent<{ value: unknown }>) => {
        console.log(event.target.value);
        setGender(event.target.value as GENDER);
    };
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

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
                    <Button variant="contained" color="primary" onClick={() => setRegisterDialogOpen(true)}>
                        新規
                    </Button>
                </Grid>
            </Grid>

            {/* 来店時のモーダル */}
            <Dialog open={enterDialogOpen} onClose={() => setEnterDialogOpen(false)}>
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

            {/* 新規登録時のモーダル */}
            <Dialog open={registerDialogOpen} onClose={() => setRegisterDialogOpen(false)}>
                <Box height={500} width={400} px="100px">
                    <Box my={3} style={{ textAlign: 'center' }}>
                        <Typography variant="h4">新規登録</Typography>
                    </Box>
                    <TextField
                        value={lastName}
                        label="姓"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                        onChange={handleChangeLastName}
                    />
                    <TextField
                        value={firstName}
                        label="名"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                        onChange={handleChangeFirstName}
                    />
                    <FormControl variant="outlined" style={{ marginBottom: 15, minWidth: 120 }}>
                        <InputLabel htmlFor="gender">性別</InputLabel>
                        <Select id="gender" value={gender} label="性別" onChange={handleChangeGender}>
                            <MenuItem value={GENDER.MALE}>男性</MenuItem>
                            <MenuItem value={GENDER.FEMALE}>女性</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        value={email}
                        label="メールアドレス"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                        onChange={handleChangeEmail}
                    />
                    <TextField
                        value={address}
                        label="住所"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                        onChange={handleChangeAddress}
                    />
                    <Button variant="contained" color="primary" onClick={register} disabled={registerDisabled}>
                        登録
                    </Button>
                </Box>
            </Dialog>
        </Box>
    );
}
