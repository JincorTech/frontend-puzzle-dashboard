import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { namedRoutes } from '../../../routes';

import { fetchExchanges } from '../../../redux/modules/app/exchanges';
import { fetchCurrencies } from '../../../redux/modules/app/currencies';

import Nav from '../../../components/app/Nav';
import Clients from '../Clients';
import Portfolio from '../Portfolio';
import Market from '../Market';

import s from './styles.css';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.fetchExchanges();
    this.props.fetchCurrencies();
  }

  render() {
    return (
      <div className={s.wrapper}>
        <Nav/>
        <Switch>
          <Route exact path={namedRoutes.market} component={Market}/>
          <Route exact path={namedRoutes.portfolio} component={Portfolio}/>
          <Route exact path={namedRoutes.clients} component={Clients}/>
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  null,
  {
    fetchExchanges,
    fetchCurrencies
  }
)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
