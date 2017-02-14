import React from 'react';
import {Link} from '../component';

function isActive(pathname: string): string {
  return location.pathname === pathname ? ' active ' : "";
}

const ActionNav = () =>
  <ul className="nav nav-pills nav-fill mt-3 mb-3">
    <li className="nav-item">
      <Link
        className={`nav-link ${isActive('/action/view/')}`}
        to={{pathname: '/action/view/', hash: location.hash}}>docs</Link>
    </li>
    <li className="nav-item">
      <Link
        className={`nav-link ${isActive('/action/code/')}`}
        to={{pathname: '/action/code/', hash: location.hash}}>code</Link>
    </li>
  </ul>

export default ActionNav;



