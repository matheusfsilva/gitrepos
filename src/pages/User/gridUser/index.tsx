import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useContextProvider } from '../../../providers/contextProvider';

const BoxSx = {
    maxWidth: 300,
    marginTop: '30px'
}
export default function GridUser() {
    const { user } = useContextProvider();
    return (
        <Box sx={BoxSx}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography align='right'>seguidores: {user.followers}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='left'>seguindo: {user.following}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align='center'>{user.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" align='center'>@{user.login}</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography align='center'>Bio: {user.bio}</Typography>
                </Grid>
                {
                    user.email &&
                    <Grid item xs={12} >
                        <Typography align='center'>Email: {user.email}</Typography>
                    </Grid>
                }
                {
                    user.twitter_username &&
                    <Grid item xs={12} >
                        <Typography align='center'>Twitter: {user.twitter_username}</Typography>
                    </Grid>
                }
            </Grid>
        </Box>
    )
}