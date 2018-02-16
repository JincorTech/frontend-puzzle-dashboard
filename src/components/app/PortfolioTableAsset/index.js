import React from 'react';

import { numberWithCommas, percentNumber } from '../../../utils/numbers';

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
    ? <td
      className={s.red}>
        ${numberWithCommas(price.value)}
        <small>{percentNumber(price.change)}</small>
      </td>
    : <td
      className={s.green}>
        ${numberWithCommas(price.value)}
        <small>{percentNumber(price.change)}</small>
      </td>);

  const renderProfitLoss = () => (profitLoss.change < 0
    ? <td
      className={s.red}>
        ${numberWithCommas(profitLoss.value)}
        <small>{percentNumber(profitLoss.change)}</small>
      </td>
    : <td
      className={s.green}>
        ${numberWithCommas(profitLoss.value)}
        <small>{percentNumber(profitLoss.change)}</small>
        </td>);

  return (
    <tr className={s.asset} onClick={() => openAssetTxsPopup(symbol)}>
      <td>{asset}</td>
      <td>{numberWithCommas(qty)} {symbol}</td>
      {renderPrice()}
      <td>${numberWithCommas(exposure)}</td>
      {renderProfitLoss()}
      <td>{percentNumber(weight)}</td>
    </tr>
  );
};

export default PortfolioTableAsset;
