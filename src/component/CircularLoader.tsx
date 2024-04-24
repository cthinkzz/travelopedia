import { Box, CircularProgress } from '@mui/material';
interface Props {
  height?: string;
}

const CircularLoader = ({ height }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: height || '20vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CircularLoader;
