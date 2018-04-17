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

export default class ContainerContents extends React.Component
{
	constructor(props) {
		super(props);
		this.setCurrentHousingCompany = this.setCurrentHousingCompany.bind(this);

		this.state = {
			currentHousingCompany:0
		}
	}

	setCurrentHousingCompany(id){
		this.setState({
			currentHousingCompany:id
		});
	}

	render()
	{
		return (
			<Switch>
				<Route exact path="/"
					render={
						() => !this.props.isLogged  ?
						(<Redirect to="/login"/>) : this.props.userGroup === 3 ?
						(<IsannoitsijaEtuSivu loggedUser={this.props.loggedUser}
											  setPageTittle={this.props.setPageTittle}
											  notificationsList={this.props.notificationsList}
											  getNotificationsNew={this.props.getNotificationsNew}
											  updateNotificationStatus={this.props.updateNotificationStatus}/>) :
						(<EtuSivu loggedUser={this.props.loggedUser}/>)
					}/>

				<Route path="/etusivu"
					render={() => this.props.isLogged ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoitukset"
					render={() => this.props.isLogged ?
						(<Ilmoitukset/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoituslomake"
					render={() => this.props.isLogged ?
						(<Ilmoituslomake/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/tiedot"
					render={() => this.props.isLogged ?
						(<Tiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_ilmoitukset"
					render={() => this.props.isLogged ?
						(<IsannoitsijaIlmoitukset notificationsList={this.props.notificationsList}
													getNotifications={this.props.getNotifications}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_henkilot"
					render={() => this.props.isLogged?
						(<IsannoitsijaHenkilot  currentHousingCompany={this.state.currentHousingCompany}
												userList={this.props.userList}
												getUsers={this.props.getUsers}
												setPageTittle={this.props.setPageTittle}
												notificationsList={this.props.notificationsList}
												getNotificationsByUidStatus={this.props.getNotificationsByUidStatus}
												setUserPropsState={this.props.setUserPropsState}
												getUsersByName={this.props.getUsersByName}
												getUsersByAddress={this.props.getUsersByAddress}
												getUsersByHousingCompany={this.props.getUsersByHousingCompany}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_etusivu"
					render={() => this.props.isLogged ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_tiedot"
					render={() => this.props.isLogged ?
						(<IsannoitsijaTiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_yhtiot"
					render={() => this.props.isLogged ?
						(<IsannoitsijaTaloyhtiot currentHousingCompany={this.state.currentHousingCompany}
												housingCompList={this.props.housingCompList}
												getHousingCompanies={this.props.getHousingCompanies}
												getCompaniesByName={this.props.getCompaniesByName}
									  			getCompaniesByAddress={this.props.getCompaniesByAddress}
												setCompanyPropsState={this.props.setCompanyPropsState}
												setCurrentHousingCompany={this.setCurrentHousingCompany}/>) :
						(<Redirect to="/"/>)
						}/>

			</Switch>
		);
	}
}
