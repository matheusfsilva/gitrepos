import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '../../../../components/Button/Button';

interface _ListItemRepository {
    openInfo: boolean,
    name: string,
    setOpenInfo: any,
}

const itemSx = {
    Height: '85px'
}

export default function ListItemRepository({ openInfo, name, setOpenInfo }: _ListItemRepository) {
    return (
        <ListItem sx={itemSx}>
            {/* icone do git */}
            <ListItemIcon>
                <GitHubIcon className="storeIcon" />
            </ListItemIcon>
            {/* texto */}
            <ListItemText primary={name} secondary={null} />
            {/* botão info para abrir collapse */}
            <ListItemIcon>
                <Button onClick={() => setOpenInfo(!openInfo)}>Info{openInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Button>
            </ListItemIcon>
        </ListItem>
    )
}