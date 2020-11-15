import React from 'react';

import coin from '../assets/images/lumensCoin.svg';

interface LumensCoinInterface {
  size?: number;
}

function LumensCoin({ size = 14 }: LumensCoinInterface) {
  return (
    <img style={{ width: `${size}px` }} src={coin} alt="lumensCoin icon" />
  );
}

export default LumensCoin;
