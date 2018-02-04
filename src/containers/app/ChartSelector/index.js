import React, { Component } from 'react';

import PortfolioChart from '../../../components/app/PortfolioChart';

import s from './styles.css';

const data = [
  { timestamp: 1514764800, value: 1859 },
  { timestamp: 1514768400, value: 2237 },
  { timestamp: 1514772000, value: 3058 },
  { timestamp: 1514775600, value: 4768 },
  { timestamp: 1514779200, value: 5990 },
  { timestamp: 1514782800, value: 6000 },
  { timestamp: 1514786400, value: 8994 },
  { timestamp: 1514790000, value: 1859 },
  { timestamp: 1514793600, value: 2237 },
  { timestamp: 1514797200, value: 3058 },
  { timestamp: 1514800800, value: 4768 },
  { timestamp: 1514804400, value: 5990 },
  { timestamp: 1514808000, value: 6000 },
  { timestamp: 1514811600, value: 8994 },
  { timestamp: 1514815200, value: 1859 },
  { timestamp: 1514818800, value: 2237 },
  { timestamp: 1514822400, value: 3058 },
  { timestamp: 1514826000, value: 4768 },
  { timestamp: 1514829600, value: 5990 },
  { timestamp: 1514833200, value: 6000 },
  { timestamp: 1514836800, value: 8994 },
];

class ChartSelector extends Component {
  render() {
    return (
      <div>
        <div className={s.control}>
          <button type="button">1D</button>
          <button type="button">1W</button>
          <button type="button">1M</button>
          <button type="button">3M</button>
          <button type="button">1Y</button>
          <button type="button">ALL</button>
        </div>
        <PortfolioChart data={data}/>
      </div>
    );
  }
}

export default ChartSelector;
