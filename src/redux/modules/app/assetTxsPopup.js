import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_ASSET_TXS_POPUP = 'app/assetTxsPopup/OPEN_ASSET_TXS_POPUP';
export const CLOSE_ASSET_TXS_POPUP = 'app/assetTxsPopup/CLOSE_ASSET_TXS_POPUP';

export const openAssetTxsPopup = createAction(OPEN_ASSET_TXS_POPUP);
export const closeAssetTxsPopup = createAction(CLOSE_ASSET_TXS_POPUP);

const initialState = from({
  open: false,
  symbol: ''
});

export default createReducer({
  [OPEN_ASSET_TXS_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      symbol: payload
    })
  ),

  [CLOSE_ASSET_TXS_POPUP]: (state) => (
    state.merge({
      open: false,
      symbol: ''
    })
  )
}, initialState);
