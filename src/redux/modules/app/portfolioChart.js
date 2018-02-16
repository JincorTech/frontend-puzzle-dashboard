import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const FETCH_PORTFOLIO_CHART = 'app/portfolioChart/FETCH_PORTFOLIO_CHART';
export const CHANGE_PERIOD = 'app/portfolioChart/CHANGE_PERIOD';

export const fetchPortfolioChart = createAsyncAction(FETCH_PORTFOLIO_CHART);
export const changePeriod = createAction(CHANGE_PERIOD);

const initialState = from({
  fetching: false,
  period: '1d',
  data: []
});

export default createReducer({
  [fetchPortfolioChart.REQUEST]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [fetchPortfolioChart.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      data: payload
    })
  ),

  [fetchPortfolioChart.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [CHANGE_PERIOD]: (state, { payload }) => (
    state.merge({
      period: payload
    })
  )
}, initialState);
