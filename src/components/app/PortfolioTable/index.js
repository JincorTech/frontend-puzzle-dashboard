import React from 'react';

import PortfolioTableAsset from '../PortfolioTableAsset';

import s from './styles.css';

const DATA = [
  {
    asset: 'Bitcoin',
    symbol: 'BTC',
    qty: '10.0049495',
    price: {
      value: '13,383.30',
      change: -13.76
    },
    exposure: '140,394',
    profitLoss: {
      value: '13,949,494',
      change: 23.44
    },
    weight: 4.44
  },
  {
    asset: 'Ethereum',
    symbol: 'ETH',
    qty: '140.949584',
    price: {
      value: '1,506.90',
      change: 13.76
    },
    exposure: '90,049',
    profitLoss: {
      value: '999,576',
      change: 35.92
    },
    weight: 6.52
  },
  {
    asset: 'Litecoin',
    symbol: 'LTC',
    qty: '2058.48',
    price: {
      value: '150.39',
      change: -13.76
    },
    exposure: '24,994',
    profitLoss: {
      value: '2,483',
      change: -10.11
    },
    weight: 2.94
  }
];

const PortfolioTable = (props) => {
  const {
    openAssetTxsPopup
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
          {DATA.map((asset) => (
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
