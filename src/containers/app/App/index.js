import React, { Component } from 'react';

import AssetTxsPopup from '../AssetTxsPopup';
import AddTxAssetPopup from '../AddTxAssetPopup';
import SellTxAssetPopup from '../SellTxAssetPopup';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div>{children}</div>
        <AssetTxsPopup/>
        <AddTxAssetPopup/>
        <SellTxAssetPopup/>
      </div>
    );
  }
}

export default App;
