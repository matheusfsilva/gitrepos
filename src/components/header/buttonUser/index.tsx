import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import { useContextProvider } from '../../../providers/contextProvider';

const cardSx = {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    position: 'absolute',
    // maxWidth: '400px',
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
        <NavLink to="/User">
            <Paper elevation={0} sx={cardSx}>
                <Avatar sx={avatarSx} alt="usuário" src={user.avatar_url} />
                <Typography sx={nameSx} variant='h6'>{user.name}</Typography>
            </Paper>
        </NavLink>

    )
}