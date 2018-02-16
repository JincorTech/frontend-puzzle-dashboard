import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchCurrencies } from '../../redux/modules/app/currencies';


function* fetchCurrenciesIterator() {
  try {
    const data = yield call(get, '/assets');
    yield put(fetchCurrencies.success(data));
  } catch (e) {
    yield call(fetchCurrencies.failure(e));
  }
}

function* fetchCurrenciesSaga() {
  yield takeEvery(
    fetchCurrencies.REQUEST,
    fetchCurrenciesIterator
  );
}


export default function* () {
  yield all([
    fork(fetchCurrenciesSaga)
  ]);
}
