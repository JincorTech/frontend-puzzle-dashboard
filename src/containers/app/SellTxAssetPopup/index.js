import React from 'react';
import { connect } from 'react-redux';

import { closeSellTxAssetPopup } from '../../../redux/modules/app/sellTxAssetPopup';

import Popup from '../../../components/common/Popup';

const SellTxAssetPopup = (props) => {
  const {
    open,
    closeSellTxAssetPopup
  } = props;

  return (
    <Popup
      width={260}
      open={open}
      close={closeSellTxAssetPopup}>
      hey man
    </Popup>
  );
};

export default connect(
  (state) => ({ ...state.app.sellTxAssetPopup }),
  {
    closeSellTxAssetPopup
  }
)(SellTxAssetPopup);
