import React from 'react';

import PortfolioTable from '../../../components/app/PortfolioTable';

import s from './styles.css';

const Portfolio = (props) => {
  console.log(props);

  return (
    <div className={s.layout}>
      <div className={s.row}>
        <div className={s.summary}></div>
        <div className={s.chart}></div>
      </div>

      <div className={s.table}>
        <PortfolioTable/>
      </div>
    </div>
  );
};

export default Portfolio;
