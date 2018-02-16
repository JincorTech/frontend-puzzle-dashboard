import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_ADD_TX_ASSET_POPUP = 'app/addTxAssetPopup/OPEN_ADD_TX_ASSET_POPUP';
export const CLOSE_ADD_TX_ASSET_POPUP = 'app/addTxAssetPopup/CLOSE_ADD_TX_ASSET_POPUP';

export const openAddTxAssetPopup = createAction(OPEN_ADD_TX_ASSET_POPUP);
export const closeAddTxAssetPopup = createAction(CLOSE_ADD_TX_ASSET_POPUP);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_ADD_TX_ASSET_POPUP]: (state) => (
    state.merge({
      open: true
    })
  ),

  [CLOSE_ADD_TX_ASSET_POPUP]: (state) => (
    state.merge({
      open: false
    })
  )
}, initialState);
