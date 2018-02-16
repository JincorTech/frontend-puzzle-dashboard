import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_SELL_TX_ASSET_POPUP = 'app/sellTxAssetPopup/OPEN_SELL_TX_ASSET_POPUP';
export const CLOSE_SELL_TX_ASSET_POPUP = 'app/sellTxAssetPopup/CLOSE_SELL_TX_ASSET_POPUP';

export const openSellTxAssetPopup = createAction(OPEN_SELL_TX_ASSET_POPUP);
export const closeSellTxAssetPopup = createAction(CLOSE_SELL_TX_ASSET_POPUP);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_SELL_TX_ASSET_POPUP]: (state) => (
    state.merge({
      open: true
    })
  ),

  [CLOSE_SELL_TX_ASSET_POPUP]: (state) => (
    state.merge({
      open: false
    })
  )
}, initialState);
