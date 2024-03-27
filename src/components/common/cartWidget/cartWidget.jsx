import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#006241',
      contrastText: '#000',
    },
    secondary: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

export const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="theme.palette.primary.main">
        <ShoppingCartIcon style={{ color: '#000000' }} />
      </StyledBadge>
    </IconButton>
  );
};
