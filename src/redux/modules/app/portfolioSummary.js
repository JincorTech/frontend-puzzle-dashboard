import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_PORTFOLIO_SUMMARY = 'app/fetchPortfolioSummary/FETCH_PORTFOLIO_SUMMARY';

export const fetchPortfolioSummary = createAsyncAction(FETCH_PORTFOLIO_SUMMARY);

const initialState = from({
  fetching: false,
  data: {
    aquisitionCost: 0,
    profitLoss: 0,
    changes: {
      oneWeek: 0,
      oneMonth: 0,
      threeMonths: 0
    },
    netAssetValue: {
      value: 0,
      change: 0
    }
  }
});

export default createReducer({
  [fetchPortfolioSummary.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchPortfolioSummary.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      data: payload
    })
  ),

  [fetchPortfolioSummary.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
