import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { ChangeEventHandler, FC, useState } from 'react';
import { GENDER } from '../../domains/constants';
import { Guest } from '../../domains/models';
import { api } from '../../pages/_app';
import { PeopleQueue } from './PeopleQueue';

type WaitingGuestQueueProps = {
    waitingGuests: Guest[];
    addWaitingGuest: (guest: Guest) => Promise<void>;
    removeWaitingGuest: (guest: Guest) => Promise<void>;
};

export const WaitingGuestQueue: FC<WaitingGuestQueueProps> = (props) => {
    const [enterDialogOpen, setEnterDialogOpen] = useState(false);
    const [queueableGuests, setQueueableGuests] = useState<Guest[] | null>(null);

    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
    const [registerDisabled, setRegisterDisabled] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState<GENDER>(GENDER.MALE);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const handleChangeLastName: ChangeEventHandler<HTMLInputElement> = (event) => setLastName(event.target.value);
    const handleChangeFirstName: ChangeEventHandler<HTMLInputElement> = (event) => setFirstName(event.target.value);
    const handleChangeGender: ChangeEventHandler<{ value: unknown }> = (event) =>
        setGender(event.target.value as GENDER);
    const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => setEmail(event.target.value);
    const handleChangeAddress: ChangeEventHandler<HTMLInputElement> = (event) => setAddress(event.target.value);

    function handlePushGuest() {
        setQueueableGuests(null);
        setEnterDialogOpen(true);
        api.getGuests({ waiting: false, playing: false }).then((guests) => {
            setQueueableGuests(guests);
        });
    }

    function pushGuest(row: RowParams) {
        const selectedGuestId = row.getValue('id') as string;
        const target = queueableGuests!.find((guest) => guest.id == selectedGuestId);

        if (!target) {
            alert('顧客が見つかりませんでした。再度お試しください。');
            setEnterDialogOpen(false);
            return;
        }

        props.addWaitingGuest(target).then(() => setEnterDialogOpen(false));
    }

    function registerGuest() {
        setRegisterDisabled(true);
        api.createGuest({ lastName, firstName, gender, email, address }).then(() => {
            setRegisterDisabled(false);
            setLastName('');
            setFirstName('');
            setGender(GENDER.MALE);
            setEmail('');
            setAddress('');
            setRegisterDialogOpen(false);
        });
    }

    return (
        <>
            <PeopleQueue<Guest>
                people={props.waitingGuests}
                handleRemovePerson={props.removeWaitingGuest}
                handlePushPerson={handlePushGuest}
                handleRegisterPerson={() => setRegisterDialogOpen(true)}
            />

            {/* 来店時のモーダル */}
            <Dialog open={enterDialogOpen} onClose={() => setEnterDialogOpen(false)}>
                <Box height={500} width={400}>
                    {queueableGuests === null ? (
                        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : (
                        <>
                            <DataGrid
                                rows={queueableGuests}
                                columns={[
                                    { field: 'id', width: 70 },
                                    { field: 'lastName', width: 200 },
                                    { field: 'firstName', width: 200 },
                                ]}
                                onRowClick={pushGuest}
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
                    <Button variant="contained" color="primary" onClick={registerGuest} disabled={registerDisabled}>
                        登録
                    </Button>
                </Box>
            </Dialog>
        </>
    );
};
