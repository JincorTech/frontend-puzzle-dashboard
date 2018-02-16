import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchPortfolioSummary } from '../../redux/modules/app/portfolioSummary';


function* fetchPortfolioSummaryIterator() {
  try {
    const data = yield call(get, '/portfolio/summary');
    yield put(fetchPortfolioSummary.success(data));
  } catch (e) {
    yield put(fetchPortfolioSummary.failure(e));
  }
}

function* fetchPortfolioSummarySaga() {
  yield takeEvery(
    fetchPortfolioSummary.REQUEST,
    fetchPortfolioSummaryIterator
  );
}


export default function* () {
  yield all([
    fork(fetchPortfolioSummarySaga)
  ]);
}
