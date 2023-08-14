import React, { useState } from 'react';
import './Cart.scss';

const Price = () => {
  const [value, setValue] = useState(149.000); // thêm số lượng hiện tại của đơn hàng

  const handleIncrement = () => {
    if (value < 10){
        setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if(value > 0){
        setValue(value - 1);
    }
  };

  return (
    <div>
      {value}
    </div>
  );
};

export default NumberInput;