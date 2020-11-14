import React, { useState } from 'react';
import { RiFlag2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import '../assets/css/compenents/popupFlag.css';

function PopupFlag() {
  const [infoFlag] = useState({
    flagColor: 'var(--color-flag-red2)',
    flagName: 'Vermelha Patamar 2',
    flagDescription:
      'Usinas Térmicas ativas e alta demanda, por isso a cada 100kWh há um acréscimo de R$6,00 na sua conta',
  });

  return (
    <Link
      target="_blank"
      to={(location) => ({
        pathname:
          'https://www.cpfl.com.br/atendimento-a-consumidores/bandeira-tarifaria/Paginas/default.aspx',
      })}
      className="infoFlag"
    >
      <RiFlag2Fill
        size={36}
        color={infoFlag.flagColor}
        className="infoFlag__icon"
      />
      <h2 className="title2 infoFlag__title">{infoFlag.flagName}</h2>
      <p className="infoFlag__description">{infoFlag.flagDescription}</p>
    </Link>
  );
}

export default PopupFlag;
