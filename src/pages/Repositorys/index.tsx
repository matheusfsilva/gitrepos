import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Header from '../../components/header';
import { getRepository } from '../../services/usersAPI';
import { useContextProvider } from '../../providers/contextProvider';
import './styles.scss'

export default function RepositorysPage() {
    const { user } = useContextProvider();

    useEffect(() => {
        async function get() {
            const response = await getRepository(user.login);
            console.log(response)
        } get()
    }, [])
    return (
        // Box geral
        <Box>
            <Header />
            <Box className="body--repostorysPage">
                <Container>
                    <div>teste</div>
                </Container>
            </Box>
        </Box>

    )
}