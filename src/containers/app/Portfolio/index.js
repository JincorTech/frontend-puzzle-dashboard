import React from 'react';
import { connect } from 'react-redux';

import { openAssetTxsPopup } from '../../../redux/modules/app/assetTxsPopup';

import PortfolioTable from '../../../components/app/PortfolioTable';
import PortfolioSummary from '../../../components/app/PortfolioSummary';
import ChartSelector from '../ChartSelector';

import s from './styles.css';

const Portfolio = (props) => {
  const {
    openAssetTxsPopup
  } = props;

  return (
    <div className={s.layout}>
      <div className={s.row}>
        <div className={s.summary}>
          <PortfolioSummary/>
        </div>
        <div className={s.chart}>
          <ChartSelector/>
        </div>
      </div>

      <div className={s.table}>
        <PortfolioTable
          openAssetTxsPopup={openAssetTxsPopup}/>
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    openAssetTxsPopup
  }
)(Portfolio);
