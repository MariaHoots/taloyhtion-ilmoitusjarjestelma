import React from 'react';

export default class TopMenuIsannoitsija extends React.Component {
  render() {
    return (
			<ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/admin_ilmoitukset">Ilmoitukset</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin_yhtiot">Yhtiöt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin_henkilot">Henkilöt</a>
        </li>
      </ul>
    );
  }
}
