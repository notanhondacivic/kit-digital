import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ScrollToTop from './utils/ScrollToTop';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

import ComercioElectronico from './views/ComercioElectronico';
import CRM from './views/CRM';
import ERP from './views/ERP';
import RedesSociales from './views/RedesSociales';
import PresenciaOnline from './views/PresenciaOnline';
import PresenciaAvanzadaEnInternet from './views/PresenciaAvanzadaEnInternet';
import Marketplace from './views/Marketplace';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    
    <ScrollReveal
      ref={childRef}
      children={() => (
        <ScrollToTop>
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/ComercioElectronico" component={ComercioElectronico} layout={LayoutDefault} />
          <AppRoute exact path="/CRM" component={CRM} layout={LayoutDefault} />
          <AppRoute exact path="/ERP" component={ERP} layout={LayoutDefault} />
          <AppRoute exact path="/RedesSociales" component={RedesSociales} layout={LayoutDefault} />
          <AppRoute exact path="/PresenciaOnline" component={PresenciaOnline} layout={LayoutDefault} />
          <AppRoute exact path="/PresenciaAvanzadaEnInternet" component={PresenciaAvanzadaEnInternet} layout={LayoutDefault} />
          <AppRoute exact path="/Marketplace" component={Marketplace} layout={LayoutDefault} />
        </Switch>
        </ScrollToTop>
      )} />
    
  );
}

export default App;