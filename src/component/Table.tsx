import { Button, Tooltip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Column, Row } from '../Types';
import TableLoader from './TableLoader';
interface Props {
  loading?: boolean;
  columns: Column[];
  rows: Row[];
  iconMap: Record<string, any>;
  handleRowClick: (id: number) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TableComponent = ({
  columns,
  rows,
  loading,
  handleRowClick,
  iconMap,
}: Props) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        {loading ? (
          <TableLoader count={10} />
        ) : (
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {columns.map((column: Column) => {
                  return (
                    <StyledTableCell key={column.name}>
                      {column.name}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: Row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleRowClick(row.id)}
                >
                  {columns.map((column: Column) => {
                    if (column.type === 'link') {
                      return (
                        <StyledTableCell key={row.id + '-' + column.name}>
                          <Button>{row[column.map as keyof Row] || '-'}</Button>
                        </StyledTableCell>
                      );
                    }
                    if (column.type === 'icon') {
                      return (
                        <StyledTableCell key={row.id + '-' + column.name}>
                          <Tooltip title={row[column.map as keyof Row]}>
                            {iconMap[row[column.map as keyof Row]]}
                          </Tooltip>
                        </StyledTableCell>
                      );
                    }
                    return (
                      <StyledTableCell key={row.id + '-' + column.name}>
                        {row[column.map as keyof Row] || '-'}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Paper>
  );
};

export default TableComponent;
