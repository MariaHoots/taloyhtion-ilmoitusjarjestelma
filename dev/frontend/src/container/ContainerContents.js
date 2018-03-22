import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import EtuSivu from './components/EtuSivu';
import IsannoitsijaIlmoitukset from './components/IsannoitsijaIlmoitukset';
import IsannoitsijaHenkilot from './components/IsannoitsijaHenkilot';
import IsannoitsijaEtuSivu from './components/IsannoitsijaEtuSivu';
import IsannoitsijaTiedot from './components/IsannoitsijaTiedot';
import IsannoitsijaTaloyhtiot from './components/IsannoitsijaTaloyhtiot';
import Ilmoitukset from './components/Ilmoitukset';
import Ilmoituslomake from './components/Ilmoituslomake';
import Tiedot from './components/Tiedot';
import Login from './components/Login';
import Logout from './components/Logout';

export default class ContainerContents extends React.Component
{
	constructor(props) {
		super(props);
	}

	render()
	{
		return (
			<Switch>
				<Route exact path="/"
					render={
						() => this.props.userGroup > 0 ?
						(<EtuSivu/>) :
						(<Redirect to="/login"/>)}
				/>
				<Route path="/etusivu"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/login"/>)
						}/>
				<Route path="/login"
					render={() => this.props.userGroup === 0 ?
						(<Login onLogin={this.props.onLogin}
								onLogout={this.props.onLogout}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/Logout"
					render={() => this.props.userGroup > 0 ?
						(<Logout/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoitukset"
					render={() => this.props.userGroup > 0 ?
						(<Ilmoitukset/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoituslomake"
					render={() => this.props.userGroup > 0 ?
						(<Ilmoituslomake/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/tiedot"
					render={() => this.props.userGroup > 0 ?
						(<Tiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_ilmoitukset"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaIlmoitukset/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_henkilot"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaHenkilot userList={this.props.userList}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_etusivu"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_tiedot"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaTiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_yhtiot"
					render={() => this.props.userGroup > 1 ?
						(<IsannoitsijaTaloyhtiot housingCompList={this.props.housingCompList}/>) :
						(<Redirect to="/"/>)
						}/>
			</Switch>
		);
	}
}
