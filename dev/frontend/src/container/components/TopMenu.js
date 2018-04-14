import React from 'react';
import {Link} from 'react-router-dom';

import TopMenuAsukas from './TopMenuAsukas';
import TopMenuIsannoitsija from './TopMenuIsannoitsija';
import TopMenuHuoltoyhtio from './TopMenuHuoltoyhtio';

export default class TopMenu extends React.Component {

	naytaSivu = () => {
		//return content according user (1 admin|2 huoltomies|3 asukas)
		switch(this.props.userGroup) {
		    case 3:
		        return <TopMenuIsannoitsija/>;
		    case 2:
		        return <TopMenuHuoltoyhtio/>;
		    case 1:
		        return <TopMenuAsukas/>;
		    default:
					//not logged in
		}
	}

  render() {
		let brand =
			<a href="/" className="navbar-brand">TIJ</a>

		let leftPart =
		<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="/">Etusivu</a>
				</li>
		</ul>

 		//output correct right part of navigation
		let rightPart;
		if (this.props.userGroup === 0) {
			//user is not logged in
			rightPart =
			<ul className="navbar-nav ml-auto">
				<li className="nav-item"><a className="nav-link" href="/login"> Kirjaudu sisään</a></li>
			</ul>
		} else {
			rightPart =
			<ul className="navbar-nav">
				<li className="nav-item"><a className="nav-link" href="/tiedot">{this.props.loggedUser.first_name} {this.props.loggedUser.last_name}</a></li>
				<li className="nav-item"><Link className="nav-link" to="/" 
							onClick={this.props.onLogout}> Kirjaudu ulos</Link>
				</li>
			</ul>
		}

    return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
				{brand}
				{leftPart}
				{this.naytaSivu()}
				{rightPart}
			</nav>
    );
  }
}
