import React, { useState } from 'react';
import PopupFlag from '../components/PopupFlag';

import '../assets/css/pages/cardCpfl.css';
import MonthsChart from '../components/MonthsChart';

function CardCpfl() {
  const [infoClient] = useState({
    months: [{ monthName: 'Mai' }],
  });

  return (
    <section className="cardCpfl">
      <h1 className="title1 cardCpfl__title">QrLumens</h1>

      <PopupFlag />

      <MonthsChart />

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.cpfl.com.br/releases/Paginas/cpfl-energia-lanca-conta-facil-servico-que-explica-para-o-cliente-todos-os-detalhes-da-conta.aspx"
      >
        Mais Detalhes
      </a>
    </section>
  );
}

export default CardCpfl;
