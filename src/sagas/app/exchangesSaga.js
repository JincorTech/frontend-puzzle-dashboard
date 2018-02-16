import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchExchanges } from '../../redux/modules/app/exchanges';


function* fetchExchangesIterator() {
  try {
    const data = yield call(get, '/exchanges');
    yield put(fetchExchanges.success(data));
  } catch (e) {
    yield call(fetchExchanges.failure(e));
  }
}

function* fetchExchangesSaga() {
  yield takeEvery(
    fetchExchanges.REQUEST,
    fetchExchangesIterator
  );
}


export default function* () {
  yield all([
    fork(fetchExchangesSaga)
  ]);
}
