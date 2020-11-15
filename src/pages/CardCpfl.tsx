import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { MdLaptop } from 'react-icons/md';

import PopupFlag from '../components/PopupFlag';
import '../assets/css/pages/cardCpfl.css';
import MonthsChart from '../components/MonthsChart';

function CardCpfl() {
  return (
    <section className="cardCpfl">
      <h1 className="title1 cardCpfl__title">CardLumens</h1>

      <PopupFlag />

      <MonthsChart />

      <Link
        className="btnMoreDetails"
        target="_blank"
        rel="noreferrer"
        to={(location) => ({
          pathname:
            'https://www.cpfl.com.br/releases/Paginas/cpfl-energia-lanca-conta-facil-servico-que-explica-para-o-cliente-todos-os-detalhes-da-conta.aspx',
        })}
      >
        Detalhes
      </Link>
      <Link className="btnMoreDetails" to="/prices">
        Prêmios
      </Link>

      <article className="helpSection">
        <h3 className="title2">Problemas?</h3>
        <p>
          Você pode utilizar nossos serviços no Aplicativo, Site ou WhatsApp.
          Click para sua solução.
        </p>
        <div className="helpSection-services">
          <Link
            target="_blank"
            to={(location) => ({
              pathname:
                'https://play.google.com/store/apps/details?id=br.com.cpfl.android.autoatendimento&hl=pt_BR',
            })}
          >
            <FaMobileAlt size={38} />
            App
          </Link>
          <Link
            target="_blank"
            to={(location) => ({
              pathname: 'https://www.cpfl.com.br/Paginas/default.aspx',
            })}
          >
            <MdLaptop size={38} />
            Site
          </Link>
          <Link
            target="_blank"
            to={(location) => ({
              pathname: 'https://api.whatsapp.com/send?phone=551937951705',
            })}
          >
            <FaWhatsapp size={38} />
            WhatsApp
          </Link>
        </div>
      </article>
    </section>
  );
}

export default CardCpfl;
