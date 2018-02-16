import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchPortfolioTable } from '../../redux/modules/app/portfolioTable';


function* fetchPortfolioTableIterator() {
  try {
    const data = yield call(get, '/portfolio/table');
    yield put(fetchPortfolioTable.success(data));
  } catch (e) {
    yield call(fetchPortfolioTable.failure(e));
  }
}

function* fetchPortfolioTableSaga() {
  yield takeEvery(
    fetchPortfolioTable.REQUEST,
    fetchPortfolioTableIterator
  );
}


export default function* () {
  yield all([
    fork(fetchPortfolioTableSaga)
  ]);
}
