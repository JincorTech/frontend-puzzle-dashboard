import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import exchangesSaga from './app/exchangesSaga';
import currenciesSaga from './app/currenciesSaga';
import portfolioChartSaga from './app/portfolioChartSaga';
import portfolioTableSaga from './app/portfolioTableSaga';
import addTxAssetPopupSaga from './app/addTxAssetPopupSaga';
import assetTxsPopup from './app/assetTxsPopup';
import portfolioSummarySaga from './app/portfolioSummarySaga';

export default function* () {
  yield all([
    fork(exchangesSaga),
    fork(currenciesSaga),
    fork(formActionSaga),
    fork(portfolioChartSaga),
    fork(portfolioTableSaga),
    fork(addTxAssetPopupSaga),
    fork(assetTxsPopup),
    fork(portfolioSummarySaga)
  ]);
}
