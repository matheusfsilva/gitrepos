import React, { useEffect, useState } from 'react';
import { Box, Container, List } from '@mui/material';
import Header from '../../components/header';
import ItemRepository from './itemRepository';
import { getRepository } from '../../services/usersAPI';
import { useContextProvider } from '../../providers/contextProvider';
import { RepositoryModel } from '../../providers/models/RepositoryModel';
import './styles.scss'

export default function RepositorysPage() {
    const { user } = useContextProvider();
    const [repositorys, setRepositorys] = useState<RepositoryModel[]>([]);

    useEffect(() => {
        async function get() {
            const response = await getRepository(user.login);
            if (response.status === 200) {
                setRepositorys(response.data)
            }
        } get()
    }, [])

    return (
        // Box geral
        <Box>
            <Header />
            <Box className="body--repostorysPage">
                <Container>
                    <List>
                        {
                            repositorys.map((e: RepositoryModel) => (
                                <ItemRepository repository={e} />
                            ))
                        }
                    </List>
                </Container>
            </Box>
        </Box>

    )
}