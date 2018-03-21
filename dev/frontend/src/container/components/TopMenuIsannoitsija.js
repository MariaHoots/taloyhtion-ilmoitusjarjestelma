import React from 'react';

export default class TopMenuIsannoitsija extends React.Component {
  render() {
    return (
			<ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Ilmoitukset</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Yhtiöt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Henkilöt</a>
        </li>
      </ul>
    );
  }
}
