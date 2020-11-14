import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import QrCodeReady from './pages/QrCodeReady';
import CardCpfl from './pages/CardCpfl';
import Prices from './pages/Prices';
import GuideLumnes from './pages/GuideLumnes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={QrCodeReady} />
        <Route path="/card-cpfl" component={CardCpfl} />
        <Route path="/prices" component={Prices} />
        <Route path="/guide" component={GuideLumnes} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
