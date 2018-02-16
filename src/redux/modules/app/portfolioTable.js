import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_PORTFOLIO_TABLE = 'app/portfolioTable/FETCH_PORTFOLIO_TABLE';

export const fetchPortfolioTable = createAsyncAction(FETCH_PORTFOLIO_TABLE);

const initialState = from({
  fetching: false,
  list: []
});

export default createReducer({
  [fetchPortfolioTable.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchPortfolioTable.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      list: payload
    })
  ),

  [fetchPortfolioTable.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
