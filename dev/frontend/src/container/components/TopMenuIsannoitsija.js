import React from 'react';

export default class TopMenuIsannoitsija extends React.Component {
  render() {
    return (
			<ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/admin_ilmoitukset">Ilmoitukset</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin_yhtiot">Yhtiöt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin_henkilot">Henkilöt</a>
        </li>
      </ul>
    );
  }
}
