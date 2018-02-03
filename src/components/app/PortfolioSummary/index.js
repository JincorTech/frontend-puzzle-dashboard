import React from 'react';

import s from './styles.css';

const PortfolioSummary = (props) => {
  console.log('portfolio summary props', props);

  return (
    <div>
      <div className={s.assetValue}>
        <label className={s.label}>Net asset value</label>
        <div className={s.value}>$8,097,386<small className={s.green}>+5.02%</small></div>
      </div>

      <div className={s.changes}>
        <div className={s.change}>
          <label className={s.label}>1W Change</label>
          <div className={s.valueRed}>31.83%</div>
        </div>
        <div className={s.change}>
          <label className={s.label}>1M Change</label>
          <div className={s.valueGreen}>219.83%</div>
        </div>
        <div className={s.change}>
          <label className={s.label}>3M Change</label>
          <div className={s.valueGreen}>394958.83%</div>
        </div>
      </div>

      <div className={s.changesSecond}>
        <div className={s.change}>
          <label className={s.label}>Acquisition Cost</label>
          <div className={s.value}>$1,291,450</div>
        </div>
        <div className={s.change}>
          <label className={s.label}>Profit/Loss</label>
          <div className={s.value}>$6 805 936</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
