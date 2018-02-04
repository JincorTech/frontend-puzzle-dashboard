import React, { Component } from 'react';

import AssetTxsPopup from '../AssetTxsPopup';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div>{children}</div>
        <AssetTxsPopup/>
      </div>
    );
  }
}

export default App;
