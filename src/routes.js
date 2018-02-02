import React from 'react';
import { Route } from 'react-router-dom';

import App from './containers/app/App';
import AppWrapper from './containers/app/AppWrapper';

export const namedRoutes = {
  app: '/app',
  market: '/app/market',
  portfolio: '/app/portfolio',
  clients: '/app/clients'
};

export default (
  <App>
    <Route path={namedRoutes.app} component={AppWrapper}/>
  </App>
);
