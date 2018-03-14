import React from 'react';
import TopMenuAsukas from './TopMenuAsukas';
import TopMenuIsannoitsija from './TopMenuIsannoitsija';
import TopMenuHuoltoyhtio from './TopMenuHuoltoyhtio';

export default class TopMenu extends React.Component {
	naytaSivu = (sivu) =>
	{
		let Sivu = sivu;

		if (Sivu === 1)
		{
			return <TopMenuAsukas/>;
		}
		else if (Sivu === 2)
		{
			return <TopMenuIsannoitsija/>;
		}
		else if (Sivu === 3)
		{
			return <TopMenuHuoltoyhtio/>;
		}
	}


  render() {
    return (
			<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
	 		  <a href="index.html" class="navbar-brand">TIJ</a>
				<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="index.html">Etusivu</a>
						</li>
				</ul>

						{this.naytaSivu(1)}

				<ul class="navbar-nav">
				    <li class="nav-item"><a class="nav-link" href="#"> Maija Meikäläinen</a></li>
				    <li class="nav-item"><a class="nav-link" href="#"> Kirjaudu ulos</a></li>
				</ul>


		</nav>
    );
  }
}
