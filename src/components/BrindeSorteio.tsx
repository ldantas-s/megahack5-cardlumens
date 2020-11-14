import React from 'react';

import '../assets/css/compenents/brindeSorteio.css';

interface BrindeSorteioInterface {
  img: string;
  alt: string;
  brindeName: string;
}

function BrindeSorteio({ img, alt, brindeName }: BrindeSorteioInterface) {
  return (
    <>
      <h2 className="title3">Sorteio da semana:</h2>
      <div className="cardSorteio">
        <h3>{brindeName}</h3>
        <img src={img} alt={alt} />
        <a href="#">Acompanhe Sorteio</a>
      </div>
    </>
  );
}

export default BrindeSorteio;
