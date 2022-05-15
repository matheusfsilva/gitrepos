import React from 'react';
import { Box } from '@mui/material';
import ButtonUser from './buttonUser';

const boxSx = {
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    height: '100px'
}

export default function Header() {
    return (
        <Box sx={boxSx}>
            <ButtonUser />
        </Box>
    )
}