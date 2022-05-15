/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import Input from '../../components/input';
import NotFoundMessage from "./notFoundMessage";
import LoadingFull from '../../components/LoadingFull'
import Logo from '../../assets/logoGithub.png';
import { getUser } from '../../services/usersAPI';
import { useContextProvider } from "../../providers/contextProvider";
import './styles.scss';

export default function HomePage() {
    const navigate = useNavigate();
    // contextApi chamada
    const { setUser } = useContextProvider();
    const [userName, setUserName] = useState('');
    const [notFound, setNotFound] = useState(false);
    const [load, setLoad] = useState(false)

    // get do usuario e save no context
    async function get() {
        try {
            const response = await getUser(userName)
            if (response.status === 200) {
                setUser(response.data);
                setNotFound(false);
                navigate('/repositorys')
            }

        } catch (error) {
            setNotFound(true);
        }
    }

    // controle de Loading e chamada da busca
    async function buscar() {
        setLoad(true);
        await get();
        setLoad(false);
    }

    return (
        // Box geral
        <Box className="body--homePage">
            {/* Box Container */}
            <Box className="body container">
                <img className="body image" alt="logo" src={Logo} />
                <Input placeholder="digite o usuário" value={userName} onChange={(e: any) => setUserName(e.target.value)} />
                <Button onClick={() => buscar()}>Buscar</Button>
                <NotFoundMessage notFound={notFound} />
            </Box>
            {/* Loading */}
            <LoadingFull open={load} />
        </Box>
    )
}