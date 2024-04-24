import { useTheme } from '@emotion/react';
import {
  AccessAlarms,
  FlightLand,
  FlightTakeoff,
  HourglassTop,
} from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTP_URL_ENDPOINT } from '../Constants';
import { SnackbarContext } from '../Context';
import { Row } from '../Types';
import TableComponent from '../component/Table';
const columns = [
  {
    name: 'Flight No.',
    map: 'flightNumber',
    type: 'link',
  },
  {
    name: 'Airline',
    map: 'airline',
  },
  {
    name: 'Origin',
    map: 'origin',
  },
  {
    name: 'Destination',
    map: 'destination',
  },
  {
    name: 'Departure Time',
    map: 'departureTime',
    dataType: 'timestamp',
  },
  {
    name: 'Status',
    map: 'status',
    type: 'icon',
  },
];

const List = () => {
  const [loader, toggleLoader] = useState<boolean>(false);
  const [rows, setRows] = useState<Row[]>([]);
  const { toggleSnackbar }: any = useContext(SnackbarContext);
  const navigate = useNavigate();
  const theme: any = useTheme();

  const iconMap = {
    Boarding: <FlightLand sx={{ color: theme.palette.success.main }} />,
    'On Time': <AccessAlarms sx={{ color: theme.palette.info.main }} />,
    Departed: <FlightTakeoff sx={{ color: theme.palette.warning.main }} />,
    Delayed: <HourglassTop sx={{ color: theme.palette.error.main }} />,
  };
  const fetchData = async () => {
    toggleLoader(true);
    try {
      const resp = await fetch(`${HTTP_URL_ENDPOINT}/flights`);
      const list = await resp.json();
      setRows(list);
    } catch (error: any) {
      toggleSnackbar(true, error?.message);
    } finally {
      toggleLoader(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRowClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div style={{ maxHeight: '60vh' }}>
      <TableComponent
        rows={rows}
        columns={columns}
        loading={loader}
        iconMap={iconMap}
        handleRowClick={handleRowClick}
      />
    </div>
  );
};

export default List;
