import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
import { fetchAssetTxs } from '../../redux/modules/app/assetTxsPopup';


function* fetchAssetTxsIterator({ payload }) {
  try {
    yield call(console.log, payload);
    const data = yield call(get, `assets/tx?asset=${payload.toUpperCase()}`);
    yield put(fetchAssetTxs.success(data));
  } catch (e) {
    yield call(fetchAssetTxs.failure(e));
  }
}

function* fetchAssetTxsSaga() {
  yield takeEvery(
    fetchAssetTxs.REQUEST,
    fetchAssetTxsIterator
  );
}


export default function* () {
  yield all([
    fork(fetchAssetTxsSaga)
  ]);
}
