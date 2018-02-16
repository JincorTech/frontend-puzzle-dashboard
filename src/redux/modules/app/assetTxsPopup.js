import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const OPEN_ASSET_TXS_POPUP = 'app/assetTxsPopup/OPEN_ASSET_TXS_POPUP';
export const CLOSE_ASSET_TXS_POPUP = 'app/assetTxsPopup/CLOSE_ASSET_TXS_POPUP';
export const FETCH_ASSET_TXS = 'app/assetTxsPopup/FETCH_ASSET_TXS';

export const openAssetTxsPopup = createAction(OPEN_ASSET_TXS_POPUP);
export const closeAssetTxsPopup = createAction(CLOSE_ASSET_TXS_POPUP);
export const fetchAssetTxs = createAsyncAction(FETCH_ASSET_TXS);

const initialState = from({
  open: false,
  fetching: false,
  symbol: '',
  data: {
    sumbol: '',
    asset: '',
    txs: []
  }
});

export default createReducer({
  [OPEN_ASSET_TXS_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      symbol: payload
    })
  ),

  [CLOSE_ASSET_TXS_POPUP]: (state) => (
    state.merge(initialState)
  ),

  [fetchAssetTxs.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchAssetTxs.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      data: payload
    })
  ),

  [fetchAssetTxs.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
