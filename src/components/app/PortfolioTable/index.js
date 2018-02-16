import React from 'react';

import PortfolioTableAsset from '../PortfolioTableAsset';

import s from './styles.css';

const PortfolioTable = (props) => {
  const {
    openAssetTxsPopup,
    portfolioTable
  } = props;

  return (
    <div>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <td>Asset</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Exposure</td>
            <td>Profit/Loss</td>
            <td>Weight, %</td>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {portfolioTable.list.map((asset) => (
            <PortfolioTableAsset
              key={asset.symbol}
              {...asset}
              openAssetTxsPopup={openAssetTxsPopup}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
