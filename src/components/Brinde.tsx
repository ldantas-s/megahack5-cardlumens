import React from 'react';
import { FaBitcoin } from 'react-icons/fa';

import '../assets/css/compenents/brinde.css';

interface BrindeInterface {
  brindeName: string;
}

function Brinde({ brindeName }: BrindeInterface) {
  return (
    <>
      <div className="brinde">
        <h3>{brindeName}</h3>
        <h3 className="brinde__price">
          25 <FaBitcoin size={16} />
        </h3>
      </div>
    </>
  );
}

export default Brinde;
