import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { useContext } from 'react';
import { SnackbarContext } from '../Context';

const SnackBar = () => {
  const { open, message, toggleSnackbar }: any = useContext(SnackbarContext);
  const handleClose = () => {
    toggleSnackbar(false);
  };

  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleClose}
    >
      <Close fontSize='small' />
    </IconButton>
  );

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
export default SnackBar;
