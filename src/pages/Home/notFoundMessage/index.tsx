/* eslint-disable react/react-in-jsx-scope */
import { Typography } from "@mui/material"

type _notFoundMessage = {
    notFound: boolean;
}

export default function NotFoundMessage({ notFound }: _notFoundMessage) {
    return (
        <div>
            {
                notFound &&
                <Typography sx={{ marginTop: '20px' }} color="red">ops, o usoário não foi encontrado</Typography>
            }
        </div>
    )
}