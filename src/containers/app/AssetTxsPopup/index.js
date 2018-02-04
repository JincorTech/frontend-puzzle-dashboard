import React from 'react';
import { connect } from 'react-redux';

import { closeAssetTxsPopup } from '../../../redux/modules/app/assetTxsPopup';

import Popup from '../../../components/common/Popup';

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
      123
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
