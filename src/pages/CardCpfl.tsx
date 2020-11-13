import React from "react";
import PopupFlag from "../components/PopupFlag";

import "../assets/css/pages/cardCpfl.css";

function CardCpfl() {
  return (
    <section className="cardCpfl">
      <h1 className="title1 cardCpfl__title">CardCPFL</h1>

      <PopupFlag />
      <h2 className="title2">Resumo</h2>
    </section>
  );
}

export default CardCpfl;
