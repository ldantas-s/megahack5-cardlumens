import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';

import Header from '../components/Header';

import '../assets/css/pages/accessories.css';

import casasBahia from '../assets/images/casasBahia.png';
import magalu from '../assets/images/magalu.png';
import walmart from '../assets/images/walmart.png';

interface ParamsInterface {
  type: string;
}

function Accessories() {
  const { type }: ParamsInterface = useParams();
  return (
    <>
      <Header>{type}</Header>
      <section className="accessories">
        <p>Visite nossos parceiros e troque seus Lumens</p>
        <div className="listaParceiros">
          <Link
            className="linkParceiro"
            to={(location) => ({ pathname: 'google.com' })}
          >
            <img src={casasBahia} alt="parceiro" />
            <IoMdArrowRoundForward size={24} />
          </Link>
          <Link
            className="linkParceiro"
            to={(location) => ({ pathname: 'google.com' })}
          >
            <img src={magalu} alt="parceiro" />
            <IoMdArrowRoundForward size={24} />
          </Link>
          <Link
            className="linkParceiro"
            to={(location) => ({ pathname: 'google.com' })}
          >
            <img src={walmart} alt="parceiro" />
            <IoMdArrowRoundForward size={24} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Accessories;
