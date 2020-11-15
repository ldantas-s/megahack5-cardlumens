import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import QrCodeReady from './pages/QrCodeReady';
import CardCpfl from './pages/CardCpfl';
import Prices from './pages/Prices';
import GuideLumnes from './pages/GuideLumnes';
import Historic from './pages/Historic';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={QrCodeReady} />
        <Route path="/card-cpfl" component={CardCpfl} />
        <Route path="/prices" component={Prices} />
        <Route path="/guide" component={GuideLumnes} />
        <Route path="/historic" component={Historic} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
