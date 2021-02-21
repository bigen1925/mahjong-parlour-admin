import { Box, Button, Grid } from '@material-ui/core';
import NamedPerson from '../dumb/NamedPerson';

type PeopleQueueProps<T extends Person> = {
    people: T[];
    handlePushPerson: () => void;
    handleRemovePerson: (person: T) => void;
    handleRegisterPerson: () => void;
};

type Person = {
    id: string;
    lastName: string;
    firstName: string;
};

export function PeopleQueue<T extends Person>(props: PeopleQueueProps<T>): JSX.Element {
    return (
        <Box border={1} borderRight={0} height={90}>
            <Grid container alignItems="center" style={{ height: '100%', textAlign: 'center' }}>
                {props.people.map((person) => (
                    <Grid
                        item
                        xs={1}
                        key={person.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => props.handleRemovePerson(person)}
                    >
                        <NamedPerson name={person.lastName} iconSize={50} />
                    </Grid>
                ))}
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <Button variant="contained" color="secondary" onClick={props.handlePushPerson}>
                        追加
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" onClick={props.handleRegisterPerson}>
                        新規
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
