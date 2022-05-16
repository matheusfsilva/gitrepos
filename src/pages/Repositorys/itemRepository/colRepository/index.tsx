import React from 'react';
import { Grid, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { RepositoryModel } from '../../../../providers/models/RepositoryModel';
import Button from '../../../../components/Button/Button';

const gridSx = {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px'
}

const iconSx = {
    marginBottom: '-4px'
}

interface _ColRepository {
    repository: RepositoryModel
}


export default function ColRepository({ repository }: _ColRepository) {
    return (
        // Grid com informações do collapse e botão com link para o repositorio
        <Grid container spacing={1} sx={gridSx}>
            <Grid item xs={4}>
                <Typography>Linguagem: {repository.language}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography align='center'>Tamanho: {repository.size}kb</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography align='right'>
                    {repository.visibility === 'public' ?
                        <>Publico <LockOpenIcon sx={iconSx} /></>
                        :
                        <>Privado <LockIcon sx={iconSx} /></>}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {
                    repository.description &&
                    <Typography>Descrição: {repository.description}</Typography>
                }
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button href={repository.html_url} target="_blank">Repositório<CodeIcon /></Button>
            </Grid>
        </Grid >
    )
}