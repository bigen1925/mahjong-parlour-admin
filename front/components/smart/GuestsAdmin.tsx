import { Box, Container, createStyles, Divider, Grid, List, ListItem, Theme, Typography } from '@material-ui/core';
import { DataGrid, RowParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { FC, useEffect } from 'react';
import { GENDER } from '../../domains/constants';
import { Guest, GuestDetail } from '../../domains/models';
import { useNullableState } from '../../helpers/hooks';
import { api } from '../../pages/_app';

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 30,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

export const GuestsAdmin: FC = () => {
    const classes = useStyle();
    const [guests, setGuests] = useNullableState<Guest[]>();
    const [guestDetail, setGuestDetail] = useNullableState<GuestDetail>();

    function handleNameListItemClick(row: RowParams) {
        api.getGuest(row.getValue('id') as string).then((guest) => {
            setGuestDetail(guest);
        });
    }

    useEffect(() => {
        api.getGuests({}).then((guests) => {
            console.log(guests);
            setGuests(guests);
        });
    }, []);

    return (
        <Container className={classes.root}>
            <Grid container style={{ minHeight: 500 }}>
                <Grid item xs={4}>
                    <DataGrid
                        columns={[
                            { field: 'lastName', headerName: '姓', width: 140 },
                            { field: 'firstName', headerName: '姓', width: 140 },
                            { field: 'gender', headerName: '性別', width: 80 },
                        ]}
                        rows={
                            guests
                                ? guests.map((guest) => ({
                                      ...guest,
                                      gender: guest.gender === GENDER.MALE ? '男性' : '女性',
                                  }))
                                : []
                        }
                        onRowClick={handleNameListItemClick}
                    />
                </Grid>

                <Grid item xs={8}>
                    <Box p={5}>
                        {!guestDetail ? null : (
                            <>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Box>
                                            <Typography variant="h6">名前:</Typography>
                                            <Box m={2}>
                                                <Typography variant="h6">
                                                    {guestDetail.lastName} {guestDetail.firstName}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant="h6">メールアドレス:</Typography>
                                            <Box m={2}>
                                                <Typography variant="h6">
                                                    {guestDetail.email || 'foo@example.com'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant="h6">性別:</Typography>
                                            <Box m={2}>
                                                <Typography variant="h6">
                                                    {guestDetail.gender === GENDER.MALE ? '男性' : '女性'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <List>
                                            <ListItem>
                                                <Typography variant="h6">
                                                    1位率: {guestDetail.rankingRates[1]}
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h6">
                                                    2位率: {guestDetail.rankingRates[2]}
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h6">
                                                    3位率: {guestDetail.rankingRates[3]}
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography variant="h6">
                                                    4位率: {guestDetail.rankingRates[4]}
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Box height={300} mt={5}>
                                    <DataGrid
                                        columns={[
                                            { field: 'enteredAt', headerName: '入店日時', width: 200 },
                                            { field: 'exitedAt', headerName: '退店日時', width: 200 },
                                            { field: 'playCount', headerName: '打数', width: 120 },
                                        ]}
                                        rows={guestDetail.visitingHistories.map((histories) => ({
                                            ...histories,
                                            enteredAt: histories.enteredAt.toLocaleString(),
                                            exitedAt: histories.exitedAt.toLocaleString(),
                                        }))}
                                    />
                                </Box>
                            </>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
