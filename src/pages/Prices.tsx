import React, { FormEvent, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';

import '../assets/css/pages/prices.css';

import Header from '../components/Header';

import SilverMedal from '../assets/images/silverMedal.svg';
import GoldMedal from '../assets/images/goldMedal.svg';
import DiamondMedal from '../assets/images/diamondMedal.svg';
import { IoMdArrowRoundForward } from 'react-icons/io';

function Prices() {
  const [oldCodeRescue, setOldCodeRescue] = useState<string[]>([]);
  const [newCodeRescue, setNewCodeRescue] = useState<string>('');
  const [points, setPoints] = useState(100);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!oldCodeRescue.includes(newCodeRescue)) {
      switch (newCodeRescue) {
        case '123':
          setPoints(points + 10);
          break;
        case '23':
          setPoints(points + 20);
          break;
        case '3':
          setPoints(points + 30);
          break;
      }
      setOldCodeRescue([...oldCodeRescue, newCodeRescue]);
    }

    setNewCodeRescue('');
  }

  return (
    <>
      <Header>Prêmios</Header>
      <main className="mainPrices">
        {/* Medals */}
        <div className="medals">
          <div className="medals__medal activeMedal">
            <img src={SilverMedal} alt="medal of the Silver" />
            Prata
          </div>
          <div className="medals__medal">
            <img src={GoldMedal} alt="medal of the gold" />
            Ouro
          </div>
          <div className="medals__medal ">
            <img src={DiamondMedal} alt="medal of the diamond" />
            Diamante
          </div>
        </div>

        <div className="points">
          <h2 className="title1">
            {points}
            <FaBitcoin size={24} />
          </h2>
          <p>Lumens</p>
          <form onSubmit={handleSubmit} className="formRescue">
            <label htmlFor="codeRescue">Código de Resgate</label>
            <input
              id="codeRescue"
              type="number"
              value={newCodeRescue}
              onChange={(event) => setNewCodeRescue(event.target.value)}
              placeholder="Code"
            />
            <button
              type="submit"
              style={
                newCodeRescue.length > 0
                  ? { width: 'initial', padding: '9px', margin: '4px' }
                  : {}
              }
            >
              <IoMdArrowRoundForward size={28} />
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Prices;
