import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import QrCodeReady from "./pages/QrCodeReady";
import CardCpfl from "./pages/CardCpfl";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={QrCodeReady} />
        <Route path="/card-cpfl" component={CardCpfl} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
