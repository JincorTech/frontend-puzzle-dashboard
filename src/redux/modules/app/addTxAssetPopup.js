import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_ADD_TX_ASSET_POPUP = 'app/addTxAssetPopup/OPEN_ADD_TX_ASSET_POPUP';
export const CLOSE_ADD_TX_ASSET_POPUP = 'app/addTxAssetPopup/CLOSE_ADD_TX_ASSET_POPUP';
export const ADD_TX_ASSET = 'app/addTxAssetPopup/ADD_TX_ASSET';

export const openAddTxAssetPopup = createAction(OPEN_ADD_TX_ASSET_POPUP);
export const closeAddTxAssetPopup = createAction(CLOSE_ADD_TX_ASSET_POPUP);
export const addTxAsset = createSubmitAction(ADD_TX_ASSET);

const initialState = from({
  open: false,
  fetching: false
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
  ),

  [addTxAsset.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [addTxAsset.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [addTxAsset.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
