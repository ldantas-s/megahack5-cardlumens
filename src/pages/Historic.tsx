import React from 'react';
import Header from '../components/Header';

import '../assets/css/pages/historic.css';
import Brinde from '../components/Brinde';

function Historic() {
  return (
    <>
      <Header>Histórico</Header>
      <section className="historic">
        <div>
          <Brinde name="2ª via do boleto" points="20" />
          <Brinde name="Religamento de energia" points="50" />
        </div>
      </section>
    </>
  );
}

export default Historic;
