import { createContext, useState } from 'react';

export const SnackbarContext = createContext({});

const SnackbarContextProvider = ({ children }: any) => {
  const [open, toggleOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleSnackbar = (state: boolean, message?: string) => {
    toggleOpen(state);
    setMessage(message || '');
  };

  return (
    <SnackbarContext.Provider value={{ open, message, toggleSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
