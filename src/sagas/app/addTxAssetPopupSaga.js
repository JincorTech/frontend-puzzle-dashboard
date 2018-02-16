import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { post } from '../../utils/fetch';
import { addTxAsset } from '../../redux/modules/app/addTxAssetPopup';


function* addTxAssetIterator({ payload }) {
  try {
    const request = {
      ...payload,
      value: Number(payload.value),
      price: Number(payload.price),
      timestamp: Math.round(Date.parse(payload.timestamp) / 1000)
    };
    yield call(post, '/assets/tx', request);
    yield put(addTxAsset.success());
  } catch (e) {
    yield call(console.log, e);
  }
}

function* addTxAssetSaga() {
  yield takeEvery(
    addTxAsset.REQUEST,
    addTxAssetIterator
  );
}


export default function* () {
  yield all([
    fork(addTxAssetSaga)
  ]);
}
