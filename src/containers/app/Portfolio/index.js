import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openAssetTxsPopup } from '../../../redux/modules/app/assetTxsPopup';
import { openAddTxAssetPopup } from '../../../redux/modules/app/addTxAssetPopup';
import { fetchPortfolioChart } from '../../../redux/modules/app/portfolioChart';
import { fetchPortfolioTable } from '../../../redux/modules/app/portfolioTable';
import { fetchPortfolioSummary } from '../../../redux/modules/app/portfolioSummary';

import PortfolioTable from '../../../components/app/PortfolioTable';
import PortfolioSummary from '../../../components/app/PortfolioSummary';
import ChartSelector from '../ChartSelector';

import s from './styles.css';

class Portfolio extends Component {
  componentDidMount() {
    this.props.fetchPortfolioChart();
    this.props.fetchPortfolioTable();
    this.props.fetchPortfolioSummary();
  }

  render() {
    const {
      openAssetTxsPopup,
      openAddTxAssetPopup,
      portfolioTable,
      portfolioSummary
    } = this.props;

    return (
      <div className={s.layout}>
        <div className={s.row}>
          <div className={s.leftSide}>
            <div className={s.summary}>
              <PortfolioSummary portfolioSummary={portfolioSummary}/>
            </div>
            <div className={s.addAsset}>
              <button
                type="button"
                onClick={() => openAddTxAssetPopup()}>+ Add asset</button>
            </div>
          </div>
          <div className={s.chart}>
            <ChartSelector/>
          </div>
        </div>

        <div className={s.table}>
          <PortfolioTable
            portfolioTable={portfolioTable}
            openAssetTxsPopup={openAssetTxsPopup}/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    portfolioTable: state.app.portfolioTable,
    portfolioSummary: state.app.portfolioSummary
  }),
  {
    openAssetTxsPopup,
    openAddTxAssetPopup,
    fetchPortfolioChart,
    fetchPortfolioTable,
    fetchPortfolioSummary
  }
)(Portfolio);
