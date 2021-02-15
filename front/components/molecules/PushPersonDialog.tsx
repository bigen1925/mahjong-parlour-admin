import { Box, CircularProgress, Dialog } from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { FC, useEffect, useState } from 'react';

type Person = {
    id: string;
    lastName: string;
    firstName: string;
};
type PushPersonDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    pushPerson: (person: Person) => Promise<void>;
    getQueueablePeople: () => Promise<Person[]>;
};
export const PushPersonDialog: FC<PushPersonDialogProps> = (props) => {
    const [queueablePeople, setQueueablePeople] = useState<Person[] | null>(null);

    useEffect(() => {
        if (props.open) {
            setQueueablePeople(null);

            props.getQueueablePeople().then((people) => {
                setQueueablePeople(people);
            });
            // api.getGuests({ waiting: false, playing: false }).then((guests) => {
            //     setQueueablePeople(guests);
            // });
        }
    }, [props.open]);

    function pushPerson(row: RowParams) {
        const selectedPersonId = row.getValue('id') as string;
        const target = queueablePeople!.find((person) => person.id == selectedPersonId);

        if (!target) {
            alert('対象が見つかりませんでした。再度お試しください。');
            props.setOpen(false);
            return;
        }

        props.pushPerson(target);
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <Box height={500} width={400}>
                {queueablePeople === null ? (
                    <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                    <DataGrid
                        rows={queueablePeople}
                        columns={[
                            { field: 'id', width: 70 },
                            { field: 'lastName', width: 200 },
                            { field: 'firstName', width: 200 },
                        ]}
                        onRowClick={pushPerson}
                    />
                )}
            </Box>
        </Dialog>
    );
};
