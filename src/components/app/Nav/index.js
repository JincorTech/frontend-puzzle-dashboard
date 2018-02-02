import React from 'react';
import { NavLink } from 'react-router-dom';

import { namedRoutes } from '../../../routes';

import s from './styles.css';

export default () => (
  <div className={s.topbar}>
    <div className={s.logo}>Puzzle Capital</div>
    <nav className={s.nav}>
      <NavLink
        to={namedRoutes.market}
        className={s.link}
        activeClassName={s.activeLink}>
        Market
      </NavLink>
      <NavLink
        to={namedRoutes.portfolio}
        className={s.link}
        activeClassName={s.activeLink}>
        Portfolio
      </NavLink>
      <NavLink
        to={namedRoutes.clients}
        className={s.link}
        activeClassName={s.activeLink}>
        Clients
      </NavLink>
    </nav>
    <div className={s.logout}>
      <button type="button">Logout</button>
    </div>
  </div>
);
