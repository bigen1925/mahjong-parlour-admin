import {
    Box,
    Button,
    Dialog,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GENDER } from '../../domains/constants';
import { Guest } from '../../domains/models';
import { api } from '../../pages/_app';
import { PeopleQueue } from './PeopleQueue';
import { PushPersonDialog } from './PushPersonDialog';

type WaitingGuestQueueProps = {
    waitingGuests: Guest[];
    addWaitingGuest: (guest: Guest) => Promise<void>;
    removeWaitingGuest: (guest: Guest) => Promise<void>;
};

export const WaitingGuestQueue: FC<WaitingGuestQueueProps> = (props) => {
    const [enterDialogOpen, setEnterDialogOpen] = useState(false);
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

    return (
        <>
            <PeopleQueue
                people={props.waitingGuests}
                handleRemovePerson={props.removeWaitingGuest}
                handlePushPerson={() => setEnterDialogOpen(true)}
                handleRegisterPerson={() => setRegisterDialogOpen(true)}
            />

            {/* 来店時のモーダル */}
            <PushPersonDialog
                open={enterDialogOpen}
                setOpen={setEnterDialogOpen}
                pushPerson={props.addWaitingGuest}
                getQueueablePeople={() => api.getGuests({ waiting: false, playing: false })}
            />

            <RegisterDialog open={registerDialogOpen} setOpen={setRegisterDialogOpen} />
        </>
    );
};

/*********************
 * 新規登録時のモーダル
 *********************/
type RegisterDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
type FormData = {
    lastName: string;
    firstName: string;
    gender: GENDER;
    email: string;
    address: string;
};
const RegisterDialog: FC<RegisterDialogProps> = (props) => {
    const [registerDisabled, setRegisterDisabled] = useState(false);
    const { register, handleSubmit, control } = useForm<FormData>();

    function onSubmit(data: FormData) {
        setRegisterDisabled(true);
        api.createGuest(data).then(() => {
            setRegisterDisabled(false);
            props.setOpen(false);
        });
    }
    return (
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <Box height={500} width={400} px="100px">
                <Box my={3} style={{ textAlign: 'center' }}>
                    <Typography variant="h4">新規登録</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        name="lastName"
                        inputRef={register({ required: true })}
                        label="姓"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                    />
                    <TextField
                        name="firstName"
                        inputRef={register({ required: true })}
                        label="名"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                    />
                    <FormControl variant="outlined" style={{ marginBottom: 15, minWidth: 120 }}>
                        <InputLabel htmlFor="gender">性別</InputLabel>
                        <Controller
                            name="gender"
                            as={
                                <Select label="性別">
                                    <MenuItem value={GENDER.MALE}>男性</MenuItem>
                                    <MenuItem value={GENDER.FEMALE}>女性</MenuItem>
                                </Select>
                            }
                            control={control}
                            defaultValue={GENDER.MALE}
                        />
                    </FormControl>
                    <TextField
                        name="email"
                        inputRef={register}
                        label="メールアドレス"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                    />
                    <TextField
                        name="address"
                        inputRef={register}
                        label="住所"
                        variant="outlined"
                        style={{ marginBottom: 15 }}
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={registerDisabled}>
                        登録
                    </Button>
                </form>
            </Box>
        </Dialog>
    );
};
