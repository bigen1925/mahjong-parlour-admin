import { CircularProgress, Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from './_app';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright © bigen1925 {new Date().getFullYear()} .
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface FormData {
    loginId: string;
    password: string;
}

const SignIn: FC = () => {
    const styles = useStyles();
    const router = useRouter();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const { register, handleSubmit, errors } = useForm<FormData>();

    function signIn(data: FormData) {
        setIsSigningIn(true);
        api.authenticate(data.loginId, data.password)
            .then(() => {
                router.push('/');
            })
            .finally(() => {
                setIsSigningIn(false);
            });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box mt={2}>
                    {isSigningIn ? (
                        <Box mt={4}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="loginId"
                                label="LoginId"
                                name="loginId"
                                inputRef={register({ required: true })}
                                autoFocus
                            />
                            {errors.loginId && <span>loginIdを入力してください</span>}
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={register({ required: true })}
                            />
                            {errors.password && <span>passwordを入力してください</span>}
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={styles.submit}
                                onClick={handleSubmit(signIn)}
                            >
                                Sign In
                            </Button>
                        </>
                    )}
                </Box>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default SignIn;
