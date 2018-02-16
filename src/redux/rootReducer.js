import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import exchanges from './modules/app/exchanges';
import currencies from './modules/app/currencies';
import assetTxsPopup from './modules/app/assetTxsPopup';
import addTxAssetPopup from './modules/app/addTxAssetPopup';
import sellTxAssetPopup from './modules/app/sellTxAssetPopup';
import portfolioChart from './modules/app/portfolioChart';
import portfolioTable from './modules/app/portfolioTable';
import portfolioSummary from './modules/app/portfolioSummary';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    exchanges,
    currencies,
    assetTxsPopup,
    addTxAssetPopup,
    sellTxAssetPopup,
    portfolioChart,
    portfolioTable,
    portfolioSummary
  })
});
