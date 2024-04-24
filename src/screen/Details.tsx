import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HTTP_URL_ENDPOINT } from '../Constants';
import { SnackbarContext } from '../Context';
import { Row } from '../Types';
import FlightImg from '../assets/flight.jpg';
import CircularLoader from '../component/CircularLoader';

const Details = () => {
  const [loader, toggleLoader] = useState<boolean>(false);
  const [data, setData] = useState<Partial<Row>>({});
  const { toggleSnackbar }: any = useContext(SnackbarContext);
  const { id } = useParams();

  const fetchData = async () => {
    toggleLoader(true);
    try {
      const resp = await fetch(`${HTTP_URL_ENDPOINT}/flights/${id}`);
      const data = await resp.json();
      setData(data);
    } catch (error: any) {
      toggleSnackbar(true, error?.message);
      setData({});
    } finally {
      toggleLoader(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const details = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='subtitle1'>
          Fligth Number : {data?.flightNumber}
        </Typography>
        <Typography variant='subtitle1'>Airline : {data.airline}</Typography>
        <Typography variant='subtitle1'>Origin : {data.origin}</Typography>
        <Typography variant='subtitle1'>
          Destination : {data.destination}
        </Typography>
        <Typography variant='subtitle1'>
          DepartureTime : {data.departureTime}
        </Typography>
        <Typography variant='subtitle1'>Status : {data.status}</Typography>
      </div>
    );
  };

  return (
    <div style={{ maxHeight: '60vh' }}>
      <img src={FlightImg} style={{ width: '100vw', height: '50vh' }} />
      {loader ? <CircularLoader /> : details()}
    </div>
  );
};

export default Details;
