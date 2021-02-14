import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { api } from '../../pages/_app';
import { DefaultFooter } from '../organisms/DefaultFooter';
import { DefaultHeader } from '../organisms/DefaultHeader';

export const DefaultTemplate: FC = (props) => {
    // 認証が必要
    const router = useRouter();
    const [ready, setReady] = useState(false);
    useEffect(() => {
        api.isAuthenticated().then((auth) => {
            if (auth) {
                return setReady(true);
            }
            router.push('/login');
        });
    }, []);

    if (!ready) {
        return null;
    }

    return (
        <Box width="100%">
            <Box component="header" boxShadow={2} height={65} bgcolor="primary.light">
                <DefaultHeader />
            </Box>

            <Box component="main">{props.children}</Box>

            <Box component="footer" mt={10} borderTop={1} display="flex" justifyContent="center">
                <DefaultFooter />
            </Box>
        </Box>
    );
};
