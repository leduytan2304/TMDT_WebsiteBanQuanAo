import React, { createContext, useContext, useState } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <NumberContext.Provider value={{ value, setValue }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => {
  return useContext(NumberContext);
};