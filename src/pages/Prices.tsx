import React, { FormEvent, useState } from 'react';
// import { FaBitcoin } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import '../assets/css/pages/prices.css';

import Header from '../components/Header';
import MedalTabs from '../components/MedalTabs';

import SilverMedal from '../assets/images/silverMedal.svg';
import GoldMedal from '../assets/images/goldMedal.svg';
import DiamondMedal from '../assets/images/diamondMedal.svg';
// Imagens de empresas
import casasBahia from '../assets/images/casasBahia.png';
import magalu from '../assets/images/magalu.png';
import americanas from '../assets/images/americanas.png';
import cpfl from '../assets/images/cpfl.png';
import ODS from '../assets/images/ODS.png';
import energiaLimpa from '../assets/images/energiaLimpa.png';
import walmart from '../assets/images/walmart.png';
import carrefour from '../assets/images/carrefour.png';
import mercadolivre from '../assets/images/mercadolivre.png';
// icon LumensCoin
import LumensCoin from '../components/LumensCoin';

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
            <span className="medals__medal__elo">Prata</span>
            <span className="medals__medal__meta">0/200</span>
          </div>
          <div className="medals__medal ">
            <img src={GoldMedal} alt="medal of the gold" />
            <span className="medals__medal__elo">Prata</span>
            <span className="medals__medal__meta">/500</span>
          </div>
          <div className="medals__medal ">
            <img src={DiamondMedal} alt="medal of the diamond" />
            <span className="medals__medal__elo">Prata</span>
            <span className="medals__medal__meta">/1000</span>
          </div>
        </div>

        <div className="points">
          <h2 className="title1">
            {points}
            <LumensCoin size={24} />
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

        <MedalTabs />

        <Link to="/historic" className="btnHistoric">
          Histórico
        </Link>

        <h2 className="title2">Parceiros:</h2>
        <div className="parceiros">
          <img src={casasBahia} alt="parceiro" />
          <img src={magalu} alt="parceiro" />
          <img src={americanas} alt="parceiro" />
          <img src={cpfl} alt="parceiro" />
          <img src={ODS} alt="parceiro" />
          <img src={energiaLimpa} alt="parceiro" />
          <img src={walmart} alt="parceiro" />
          <img src={carrefour} alt="parceiro" />
          <img src={mercadolivre} alt="parceiro" />
        </div>
      </main>
    </>
  );
}

export default Prices;
