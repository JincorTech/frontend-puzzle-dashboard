import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeAssetTxsPopup, fetchAssetTxs } from '../../../redux/modules/app/assetTxsPopup';

import Popup from '../../../components/common/Popup';

import s from './styles.css';

class AssetTxsPopup extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.open && nextProps.symbol !== this.props.symbol) {
      this.props.fetchAssetTxs(nextProps.symbol);
    }
  }

  render() {
    const {
      open,
      closeAssetTxsPopup,
      data: {
        asset,
        txs
      }
    } = this.props;

    const renderTableRow = (tx) => {
      console.log(tx);
      return (
        <tr key={tx.id}>
          <td>{tx.timestamp}</td>
          <td>{tx.exchange.name}</td>
          <td>{tx.value} {tx.asset.symbol}</td>
          <td>{'$'}{tx.price}</td>
          <td>
            <button type="button">Remove</button>
          </td>
        </tr>
      );
    };

    const renderTable = (txs) => {
      if (txs.length > 0) {
        return (
          <table className={s.table}>
            <tbody className={s.tbody}>
              {txs.map((tx) => renderTableRow(tx))}
            </tbody>
          </table>
        );
      }

      return (
        <div>No transactions here. Please, add new one</div>
      );
    };

    return (
      <Popup
        width={800}
        open={open}
        close={closeAssetTxsPopup}>

        <div className={s.popup}>
          <div className={s.head}>
            <div className={s.title}>{asset}</div>

            <div className={s.control}>
              <button type="button" className={s.cButton}>Buy</button>
              <button type="button" className={s.cButton}>Sell</button>
            </div>
          </div>

          <div className={s.body}>
            {renderTable(txs)}
          </div>
        </div>

      </Popup>
    );
  }
}

export default connect(
  (state) => ({
    ...state.app.assetTxsPopup
  }),
  {
    closeAssetTxsPopup,
    fetchAssetTxs
  }
)(AssetTxsPopup);
