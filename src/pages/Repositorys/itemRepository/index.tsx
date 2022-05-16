import React, { useState } from 'react';
import { Collapse, Paper } from '@mui/material';
import ColRepository from './colRepository';
import ListItemRepository from './listItemRepository';
import { RepositoryModel } from '../../../providers/models/RepositoryModel';

const paperSx = {
    marginBottom: '8px',
    display: 'flex',
    minHeight: '85px',
    flexDirection: 'column',
    justifyContent: 'center',
}

interface _ItemRepository {
    repository: RepositoryModel
}

export default function ItemRepository({ repository }: _ItemRepository) {
    const [openInfo, setOpenIfon] = useState(false)
    return (
        // paper externo
        <Paper elevation={0} sx={paperSx}>
            {/* componet de conteudo do paper */}
            <ListItemRepository
                openInfo={openInfo}
                name={repository.name}
                setOpenInfo={setOpenIfon}
            />
            {/* Collapse abre clicando no botão info */}
            <Collapse in={openInfo} unmountOnExit>
                <ColRepository repository={repository} />
            </Collapse>
        </Paper>

    )
}