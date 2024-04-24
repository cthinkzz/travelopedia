import { useTheme } from '@emotion/react';
import { Reply } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Topbar = () => {
  const navigate = useNavigate();
  const theme: any = useTheme();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, mb: '8px' }}>
      <AppBar color='transparent' position='static' sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img
            onClick={handleNavigate}
            style={{ width: '230px', height: '50px', cursor: 'pointer' }}
            src={Logo}
          />
          <Button
            variant='contained'
            sx={{ backgroundColor: theme.palette.primary.light }}
            startIcon={<Reply />}
            onClick={handleNavigate}
          >
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
