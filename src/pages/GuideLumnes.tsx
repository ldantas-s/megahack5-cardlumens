import React, { useState } from 'react';
import Header from '../components/Header';

import guide1 from '../assets/images/guide1.png';
import guide2 from '../assets/images/guide2.png';
import guide3 from '../assets/images/guide3.png';

import '../assets/css/pages/guideLumens.css';

function GuideLumnes() {
  const [infoSliders] = useState([
    {
      title: 'É fácil juntar Lumens',
      img: guide1,
      description:
        'Utilize nossos serviços digitais e acumule Lumens que não expiram',
    },
    {
      title: 'Pague sua conta de energia em dia',
      img: guide2,
      description:
        'Pague sua conta de energia em dia ou antecipado e ganhe Lumens',
    },
    {
      title: 'Resgate prêmios com os Lumens',
      img: guide3,
      description:
        'Acumule Lumens e regaste brindes de nossos parceiros sem pagar nada',
    },
  ]);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Header />
      <section className="guide">
        <h2 className="guide__title">{infoSliders[position].title}</h2>
        <div className="guide-blockImg">
          <img src={infoSliders[position].img} alt="" />
        </div>

        <div className="guide__navigation">
          <span
            onClick={() => setPosition(0)}
            className={position === 0 ? 'circle circleActive' : 'circle'}
          ></span>
          <span
            onClick={() => setPosition(1)}
            className={position === 1 ? 'circle circleActive' : 'circle'}
          ></span>
          <span
            onClick={() => setPosition(2)}
            className={position === 2 ? 'circle circleActive' : 'circle'}
          ></span>
        </div>

        <p className="guide__description">
          {infoSliders[position].description}
        </p>
      </section>
    </>
  );
}

export default GuideLumnes;
