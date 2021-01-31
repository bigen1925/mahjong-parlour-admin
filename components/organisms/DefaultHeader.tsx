import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

export default function DefaultHeader(): JSX.Element {
    return (
        <Grid container alignItems="center" style={{ height: '100%' }}>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <Image src="/logo_transparent.png" alt="logo" height={50} width={50} />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <Typography variant="h5">卓管理</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
