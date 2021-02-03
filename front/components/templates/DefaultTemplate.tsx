import { Box } from '@material-ui/core';
import DefaultFooter from '../organisms/DefaultFooter';
import DefaultHeader from '../organisms/DefaultHeader';
import { FC } from 'react';

export const DefaultTemplate: FC = (props) => {
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
