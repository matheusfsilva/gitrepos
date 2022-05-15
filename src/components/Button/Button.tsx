/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { styled } from '@mui/material/styles';
import ButtonMaterial, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';


export default function Button(props: ButtonProps) {

  const ColorButton = styled(ButtonMaterial)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[300],
    },
  }));

  return (
    <ColorButton {...props} />
  );
}
