import React from 'react';
import { useNumber } from './NumberContext';

const AnotherComponent = () => {
  const { value } = useNumber();

  return (
    <div>
      <p>Value from NumberInput: {value}</p>
    </div>
  );
};

export default AnotherComponent;