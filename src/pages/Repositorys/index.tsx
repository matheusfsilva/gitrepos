import React, { useEffect, useState } from 'react';
import { Box, Container, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import ItemRepository from './itemRepository';
import LoadingFull from '../../components/LoadingFull';
import { getRepository } from '../../services/usersAPI';
import { useContextProvider } from '../../providers/contextProvider';
import { RepositoryModel } from '../../providers/models/RepositoryModel';
import BackButton from '../../components/BackButton';
import './styles.scss'

export default function RepositorysPage() {
    const navigate = useNavigate();
    const { user } = useContextProvider();
    const [repositorys, setRepositorys] = useState<RepositoryModel[]>([]);
    const [load, setLoad] = useState(false)

    async function effectgetRepository() {
        const response = await getRepository(user.login);
        console.log(response)
        if (response.status === 200) {
            setRepositorys(response.data)
        }
    }
    function checkUser() {
        if (!user.login) {
            navigate('/')
        }
    }

    useEffect(() => {
        async function get() {
            setLoad(true)
            checkUser()
            await effectgetRepository()
            setLoad(false)
        } get()
    }, [])


    return (
        // Box geral
        <Box>
            <LoadingFull open={load} />
            <Header />

            <Box className="body--repostorysPage">
                <BackButton />
                <Container>
                    <List>
                        {
                            repositorys.map((e: RepositoryModel) => (
                                <ItemRepository key={e.id} repository={e} />
                            ))
                        }
                    </List>
                </Container>
            </Box>
        </Box>

    )
}