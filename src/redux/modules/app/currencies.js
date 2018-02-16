import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_CURRENCIES = 'app/currencies/FETCH_CURRENCIES';

export const fetchCurrencies = createAsyncAction(FETCH_CURRENCIES);

const initialState = from({
  fetching: false,
  list: []
});

export default createReducer({
  [fetchCurrencies.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchCurrencies.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      list: payload
    })
  ),

  [fetchCurrencies.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
