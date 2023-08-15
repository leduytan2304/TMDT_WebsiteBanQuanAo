import React, { useState } from 'react';
import './Cart.scss';

const NumberInput = () => {
  const [value, setValue] = useState(1); // thêm số lượng hiện tại của đơn hàng

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
    <div class="row numinp" align="center">
        <div class="col-1 btnin">
            <a onClick={handleDecrement}>
                <i class="far fa-minus-square"></i>
            </a>
        </div>
        <div class="col-1 val" align="center">
            <p>{value}</p>
        </div>
        <div class="col-1 btnin">
            <a onClick={handleIncrement}>
                <i class="far fa-plus-square"></i>
            </a>
        </div>
    </div>
  );
};

export default NumberInput;