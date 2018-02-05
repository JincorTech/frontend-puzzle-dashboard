import React from 'react';

import s from './styles.css';

const PortfolioTableAsset = (props) => {
  const {
    asset,
    symbol,
    qty,
    price,
    exposure,
    profitLoss,
    weight,
    openAssetTxsPopup
  } = props;

  const renderPrice = () => (price.change < 0
    ? <td className={s.red}>${price.value}<small>{price.change}</small></td>
    : <td className={s.green}>${price.value}<small>{price.change}</small></td>);

  const renderProfitLoss = () => (profitLoss.change < 0
    ? <td className={s.red}>${profitLoss.value}<small>{profitLoss.change}</small></td>
    : <td className={s.green}>${profitLoss.value}<small>{profitLoss.change}</small></td>);

  return (
    <tr className={s.asset} onClick={() => openAssetTxsPopup(symbol)}>
      <td>{asset}</td>
      <td>{qty} {symbol}</td>
      {renderPrice()}
      <td>${exposure}</td>
      {renderProfitLoss()}
      <td>{weight}</td>
    </tr>
  );
};

export default PortfolioTableAsset;
