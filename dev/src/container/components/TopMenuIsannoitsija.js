import React from 'react';

export default class TopMenu extends React.Component {
  render() {
    return (
		<ul class="navbar-nav">
		    <li class="nav-item">
		      <a class="nav-link" href="index.html)">Etusivu</a>
		    </li>
			<li class="nav-item">
		      <a class="nav-link" href="tiedot.html">Maija Meikäläinen</a>
		    </li>
			<li class="nav-item">
		      <a class="nav-link" href="index.html">Kirjaudu ulos</a>
		    </li>
		 </ul>
    );
  }
}
