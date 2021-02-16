import { FC, useState } from 'react';
import { Staff } from '../../domains/models';
import { api } from '../../pages/_app';
import { PeopleQueue } from './PeopleQueue';
import { PushPersonDialog } from './PushPersonDialog';

type WorkingStaffQueueProps = {
    workingStaffs: Staff[];
    addWorkingStaff: (guest: Staff) => Promise<void>;
    removeWorkingStaff: (guest: Staff) => Promise<void>;
};

export const WorkingStaffQueue: FC<WorkingStaffQueueProps> = (props) => {
    const [enterDialogOpen, setEnterDialogOpen] = useState(false);
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

    return (
        <>
            <PeopleQueue
                people={props.workingStaffs}
                handleRemovePerson={props.removeWorkingStaff}
                handlePushPerson={() => setEnterDialogOpen(true)}
                handleRegisterPerson={() => setRegisterDialogOpen(true)}
            />

            {/* 来店時のモーダル */}
            <PushPersonDialog
                open={enterDialogOpen}
                setOpen={setEnterDialogOpen}
                pushPerson={props.addWorkingStaff}
                getQueueablePeople={() => api.getStaffs({ working: false, playing: false })}
            />

            {/*<RegisterDialog open={registerDialogOpen} setOpen={setRegisterDialogOpen} />*/}
        </>
    );
};

/*********************
 * 新規登録時のモーダル
 *********************/
// type RegisterDialogProps = {
//     open: boolean;
//     setOpen: (open: boolean) => void;
// };
// const RegisterDialog: FC<RegisterDialogProps> = (props) => {
//     const [registerDisabled, setRegisterDisabled] = useState(false);
//     const [lastName, setLastName] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [gender, setGender] = useState<GENDER>(GENDER.MALE);
//     const [email, setEmail] = useState('');
//     const [address, setAddress] = useState('');
//     const handleChangeLastName: ChangeEventHandler<HTMLInputElement> = (event) => setLastName(event.target.value);
//     const handleChangeFirstName: ChangeEventHandler<HTMLInputElement> = (event) => setFirstName(event.target.value);
//     const handleChangeGender: ChangeEventHandler<{ value: unknown }> = (event) =>
//         setGender(event.target.value as GENDER);
//     const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => setEmail(event.target.value);
//     const handleChangeAddress: ChangeEventHandler<HTMLInputElement> = (event) => setAddress(event.target.value);
//
//     function registerGuest() {
//         setRegisterDisabled(true);
//         api.createGuest({ lastName, firstName, gender, email, address }).then(() => {
//             setRegisterDisabled(false);
//             setLastName('');
//             setFirstName('');
//             setGender(GENDER.MALE);
//             setEmail('');
//             setAddress('');
//             props.setOpen(false);
//         });
//     }
//     return (
//         <Dialog open={props.open} onClose={() => props.setOpen(false)}>
//             <Box height={500} width={400} px="100px">
//                 <Box my={3} style={{ textAlign: 'center' }}>
//                     <Typography variant="h4">新規登録</Typography>
//                 </Box>
//                 <TextField
//                     value={lastName}
//                     label="姓"
//                     variant="outlined"
//                     style={{ marginBottom: 15 }}
//                     onChange={handleChangeLastName}
//                 />
//                 <TextField
//                     value={firstName}
//                     label="名"
//                     variant="outlined"
//                     style={{ marginBottom: 15 }}
//                     onChange={handleChangeFirstName}
//                 />
//                 <FormControl variant="outlined" style={{ marginBottom: 15, minWidth: 120 }}>
//                     <InputLabel htmlFor="gender">性別</InputLabel>
//                     <Select id="gender" value={gender} label="性別" onChange={handleChangeGender}>
//                         <MenuItem value={GENDER.MALE}>男性</MenuItem>
//                         <MenuItem value={GENDER.FEMALE}>女性</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <TextField
//                     value={email}
//                     label="メールアドレス"
//                     variant="outlined"
//                     style={{ marginBottom: 15 }}
//                     onChange={handleChangeEmail}
//                 />
//                 <TextField
//                     value={address}
//                     label="住所"
//                     variant="outlined"
//                     style={{ marginBottom: 15 }}
//                     onChange={handleChangeAddress}
//                 />
//                 <Button variant="contained" color="primary" onClick={registerGuest} disabled={registerDisabled}>
//                     登録
//                 </Button>
//             </Box>
//         </Dialog>
//     );
// };
