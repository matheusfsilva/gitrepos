import React from 'react';
import { Card, Avatar, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';
import { useContextProvider } from '../../../providers/contextProvider';

const cardSx = {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    maxWidth: '400px',
    // backgroundColor: grey[300],
    margin: '10px',
    padding: '10px'
}

const nameSx = {
    paddingLeft: '10px',
    paddingRight: '10px',
}

const avatarSx = {
    width: '56px',
    height: '56px'
}

export default function ButtonUser() {
    const { user } = useContextProvider();
    return (
        <Card elevation={0} sx={cardSx}>
            <Avatar sx={avatarSx} alt="usuário" src={user.avatar_url} />
            <Typography sx={nameSx} variant='h6'>{user.name}</Typography>
        </Card>
    )
}