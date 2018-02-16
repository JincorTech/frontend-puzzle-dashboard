import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';
import assetTxsPopup from './modules/app/assetTxsPopup';
import addTxAssetPopup from './modules/app/addTxAssetPopup';
import sellTxAssetPopup from './modules/app/sellTxAssetPopup';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app,
    assetTxsPopup,
    addTxAssetPopup,
    sellTxAssetPopup
  })
});
