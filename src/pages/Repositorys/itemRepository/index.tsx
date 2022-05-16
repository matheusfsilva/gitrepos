import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Collapse, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '../../../components/Button/Button';
import ColRepository from './colRepository';
import { RepositoryModel } from '../../../providers/models/RepositoryModel';

const paperSx = {
    marginBottom: '8px',
    display: 'flex',
    minHeight: '85px',
    flexDirection: 'column',
    justifyContent: 'center',
}

const itemSx = {
    // marginBottom: '8px',
    Height: '85px'
}


interface _ItemRepository {
    repository: RepositoryModel
}

export default function ItemRepository({ repository }: _ItemRepository) {
    const [openInfo, setOpenIfon] = useState(false)
    return (
        <Paper elevation={0} sx={paperSx}>
            <ListItem sx={itemSx}>
                <ListItemIcon>
                    <GitHubIcon className="storeIcon" />
                </ListItemIcon>
                <ListItemText primary={repository.name} secondary={null} />
                <ListItemIcon>
                    <Button onClick={() => setOpenIfon(!openInfo)}>Info{openInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Button>
                </ListItemIcon>
            </ListItem>
            <Collapse in={openInfo} unmountOnExit>
                <ColRepository />
            </Collapse>
        </Paper>

    )
}