import React from 'react';
import { Box, Avatar, Paper } from '@mui/material';
import GridUser from './gridUser';
import BackButton from '../../components/BackButton';
import { useContextProvider } from '../../providers/contextProvider';
import './styles.scss';

const avatarSx = {
    height: 200,
    width: 200,
}

const paperSx = {
    maxWidth: 700,
    maxHeight: 500,
    // height: '70%',
    width: '70%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function UserPage() {
    const { user } = useContextProvider();
    return (
        <Box className="body--userPage">
            <BackButton />
            <Paper elevation={0} sx={paperSx}>
                <Avatar sx={avatarSx} src={user.avatar_url} />
                <GridUser />
            </Paper>
        </Box>
    )
}