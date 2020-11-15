import React from 'react';

import '../assets/css/compenents/brindeSorteio.css';

interface BrindeSorteioInterface {
  img: string;
  alt: string;
  brindeName: string;
  winner: string;
}

function BrindeSorteio({
  img,
  alt,
  brindeName,
  winner,
}: BrindeSorteioInterface) {
  return (
    <>
      <h2 className="title3">Sorteio da semana:</h2>
      <div className="cardSorteio">
        <h3>{brindeName}</h3>
        <img src={img} alt={alt} />
        <div className="winner">
          <p>Ganhador</p>
          <h2>{winner}</h2>
        </div>
      </div>
    </>
  );
}

export default BrindeSorteio;
