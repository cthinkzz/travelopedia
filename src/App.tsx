import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SnackbarContextProvider from './Context';
import Layout from './Layout';
import SnackBar from './component/Snackbar';
import Details from './screen/Details';
import List from './screen/List';

const gettheme = () => {
  const theme = createTheme({
    typography: {
      body1: { fontFamily: 'Roboto' },
      body2: { fontFamily: 'Roboto', fontWeight: 'normal' },
      fontSize: 12,
    },
    palette: {
      primary: {
        main: '#2F80ED',
        light: '#56CCF2',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      success: {
        light: '#008000',
        main: '#008000',
      },
      info: {
        light: '#5e35b1',
        main: '#5e35b1',
      },
      error: {
        light: '#b71c1c',
        main: '#b71c1c',
      },
      warning: {
        light: '#ff6f00',
        main: '#ff6f00',
      },
      action: {
        hover: '#56CCF2',
      },
    },
  });
  return theme;
};

function App() {
  return (
    <ThemeProvider theme={gettheme()}>
      <SnackbarContextProvider>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<List />} />
            <Route path='*' element={<List />} />
          </Routes>
        </BrowserRouter>
        <SnackBar />
      </SnackbarContextProvider>
    </ThemeProvider>
  );
}

export default App;
