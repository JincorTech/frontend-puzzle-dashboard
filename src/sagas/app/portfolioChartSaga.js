import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchPortfolioChart, CHANGE_PERIOD } from '../../redux/modules/app/portfolioChart';


function* fetchPortfolioChartIterator({ payload }) {
  try {
    const req = payload
      ? `/portfolio/chart/value?period=${payload.toLowerCase()}`
      : '/portfolio/chart/value';
    const data = yield call(get, req);
    yield put(fetchPortfolioChart.success(data));
  } catch (e) {
    yield call(fetchPortfolioChart.failure(e));
  }
}

function* fetchPortfolioChartSaga() {
  yield takeEvery(
    fetchPortfolioChart.REQUEST,
    fetchPortfolioChartIterator
  );
}


function* changePeriodIterator({ payload }) {
  yield put(fetchPortfolioChart(payload));
}

function* changePeriodSaga() {
  yield takeEvery(
    CHANGE_PERIOD,
    changePeriodIterator
  );
}


export default function* () {
  yield all([
    fork(fetchPortfolioChartSaga),
    fork(changePeriodSaga)
  ]);
}
