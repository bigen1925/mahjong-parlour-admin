import { Grid, Link, Typography } from '@material-ui/core';
import Image from 'next/image';
import { FC } from 'react';

export const DefaultHeader: FC = () => {
    return (
        <Grid container alignItems="center" style={{ height: '100%' }}>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <Image src="/logo_transparent.png" alt="logo" height={50} width={50} />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <Link href="/tables">
                        <Typography variant="h5" color="textPrimary">
                            卓状況管理
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <Link href="/guests">
                        <Typography variant="h5" color="textPrimary">
                            顧客管理
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
};
