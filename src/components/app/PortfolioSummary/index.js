import React from 'react';

import { numberWithCommas, percentNumber } from '../../../utils/numbers';

import s from './styles.css';

const PortfolioSummary = (props) => {
  console.log(props);
  const {
    aquisitionCost,
    profitLoss,
    changes,
    netAssetValue
  } = props.portfolioSummary.data;

  return (
    <div>
      <div className={s.assetValue}>
        <label className={s.label}>Net asset value</label>
        <div className={s.value}>
          ${numberWithCommas(netAssetValue.value)}
          {netAssetValue.change > 0
            ? <small className={s.green}>{percentNumber(netAssetValue.change)}</small>
            : <small className={s.red}>{percentNumber(netAssetValue.change)}</small>}
        </div>
      </div>

      <div className={s.changes}>
        <div className={s.change}>
          <label className={s.label}>1W Change</label>
          {changes.oneWeek > 0
            ? <div className={s.valueGreen}>{percentNumber(changes.oneWeek)}</div>
            : <div className={s.valueRed}>{percentNumber(changes.oneWeek)}</div>}
        </div>
        <div className={s.change}>
          <label className={s.label}>1M Change</label>
          {changes.oneMonth > 0
            ? <div className={s.valueGreen}>{percentNumber(changes.oneMonth)}</div>
            : <div className={s.valueRed}>{percentNumber(changes.oneMonth)}</div>}
        </div>
        <div className={s.change}>
          <label className={s.label}>3M Change</label>
          {changes.threeMonths > 0
            ? <div className={s.valueGreen}>{percentNumber(changes.threeMonths)}</div>
            : <div className={s.valueRed}>{percentNumber(changes.threeMonths)}</div>}
        </div>
      </div>

      <div className={s.changesSecond}>
        <div className={s.change}>
          <label className={s.label}>Acquisition Cost</label>
          <div className={s.value}>${numberWithCommas(aquisitionCost)}</div>
        </div>
        <div className={s.change}>
          <label className={s.label}>Profit/Loss</label>
          <div className={s.value}>${numberWithCommas(profitLoss)}</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
