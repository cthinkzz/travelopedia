import { useTheme } from '@emotion/react';
import { LinearProgress } from '@mui/material';
interface Props {
  count: number;
}
const TableLoader = ({ count }: Props) => {
  const theme: any = useTheme();
  if (count && count > 0) {
    return (
      <>
        {Array.from({ length: count }).map(() => (
          <LinearProgress sx={{ color: theme?.palette?.primary?.light }} />
        ))}
      </>
    );
  }
  return <LinearProgress />;
};

export default TableLoader;
