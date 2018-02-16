import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_EXCHANGES = 'app/exchanges/FETCH_EXCHANGES';

export const fetchExchanges = createAsyncAction(FETCH_EXCHANGES);

const initialState = from({
  fetching: false,
  list: []
});

export default createReducer({
  [fetchExchanges.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchExchanges.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      list: payload
    })
  ),

  [fetchExchanges.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
