import React from 'react';
import { connect } from 'react-redux';

import { closeAssetTxsPopup } from '../../../redux/modules/app/assetTxsPopup';

import Popup from '../../../components/common/Popup';

import s from './styles.css';

const AssetTxsPopup = (props) => {
  const {
    open,
    closeAssetTxsPopup
  } = props;

  return (
    <Popup
      width={800}
      open={open}
      close={closeAssetTxsPopup}>

      <div className={s.popup}>
        <div className={s.head}>
          <div className={s.title}>Beethoven</div>

          <div className={s.control}>
            <button type="button" className={s.cButton}>Buy</button>
            <button type="button" className={s.cButton}>Sell</button>
          </div>
        </div>

        <div className={s.body}>
          <table className={s.table}>
            <tbody className={s.tbody}>
              <tr>
                <td>11/11/1111</td>
                <td>Bittrex</td>
                <td>1.0303039 BTC</td>
                <td>$10,485.59</td>
                <td>
                  <button type="button">Remove</button>
                </td>
              </tr>
              <tr>
                <td>11/11/1111</td>
                <td>Bittrex</td>
                <td>1.0303039 BTC</td>
                <td>$10,485.59</td>
                <td>
                  <button type="button">Remove</button>
                </td>
              </tr>
              <tr>
                <td>11/11/1111</td>
                <td>Bittrex</td>
                <td>1.0303039 BTC</td>
                <td>$10,485.59</td>
                <td>
                  <button type="button">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </Popup>
  );
};

export default connect(
  (state) => ({
    ...state.app.assetTxsPopup
  }),
  {
    closeAssetTxsPopup
  }
)(AssetTxsPopup);
