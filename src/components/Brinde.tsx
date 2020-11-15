import React from 'react';
import { FaBitcoin } from 'react-icons/fa';

import '../assets/css/compenents/brinde.css';

interface BrindeInterface {
  name: string;
  points?: string;
}

function Brinde({ name, points }: BrindeInterface) {
  return (
    <>
      <div className="brinde">
        <h3>{name}</h3>

        {points && (
          <h3 className="brinde__price">
            {points} <FaBitcoin size={16} />
          </h3>
        )}
      </div>
    </>
  );
}

export default Brinde;
