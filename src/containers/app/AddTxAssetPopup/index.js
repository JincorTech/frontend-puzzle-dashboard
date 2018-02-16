import React from 'react';
import { connect } from 'react-redux';

import { closeAddTxAssetPopup } from '../../../redux/modules/app/addTxAssetPopup';

import Popup from '../../../components/common/Popup';
import AddTxAssetForm from '../../../components/app/AddTxAssetForm';

import s from './styles.css';

const AddTxAssetPopup = (props) => {
  const {
    open,
    closeAddTxAssetPopup
  } = props;

  return (
    <Popup
      width={280}
      open={open}
      close={closeAddTxAssetPopup}>
      <div className={s.popup}>
        <div className={s.title}>Add asset</div>
        <AddTxAssetForm/>
      </div>
    </Popup>
  );
};

export default connect(
  (state) => ({ ...state.app.addTxAssetPopup }),
  {
    closeAddTxAssetPopup
  }
)(AddTxAssetPopup);
