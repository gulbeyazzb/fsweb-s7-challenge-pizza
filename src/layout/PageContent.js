import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SiparisPage from "../pages/SiparisPage";
import SeceneklerPage from "../pages/SeceneklerPage";
import Orderconfirmed from "../Components/Orderconfirmed";

const PageContent = () => {
  return (
    // Page Componentleri
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/secenekler" exact>
          <SeceneklerPage />
        </Route>
        <Route path="/siparis-ver/:menuItemId" exact>
          <SiparisPage />
        </Route>
        <Route path="/siparis-alindi" exact>
          <Orderconfirmed />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
