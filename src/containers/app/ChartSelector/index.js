import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePeriod } from '../../../redux/modules/app/portfolioChart';

import PortfolioChart from '../../../components/app/PortfolioChart';

import s from './styles.css';


class ChartSelector extends Component {
  render() {
    const {
      changePeriod,
      data
    } = this.props;

    return (
      <div>
        <div className={s.control}>
          <button type="button" onClick={() => changePeriod('1d')}>1D</button>
          <button type="button" onClick={() => changePeriod('1w')}>1W</button>
          <button type="button" onClick={() => changePeriod('1m')}>1M</button>
          <button type="button" onClick={() => changePeriod('3m')}>3M</button>
          <button type="button" onClick={() => changePeriod('1y')}>1Y</button>
          <button type="button" onClick={() => changePeriod('all')}>ALL</button>
        </div>
        <PortfolioChart data={data}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    data: state.app.portfolioChart.data
  }),
  {
    changePeriod
  }
)(ChartSelector);
