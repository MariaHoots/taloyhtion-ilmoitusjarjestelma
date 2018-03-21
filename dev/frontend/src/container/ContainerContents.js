import React from 'react';

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
<<<<<<< HEAD
	constructor(props) {
		super(props);
	}

	



	naytaSivu = (sivu) => 
=======
	naytaSivu = (sivu) =>
>>>>>>> 47ede1a446398ec7a56bd364e3860f71d95f34de
	{
		let Sivu = sivu;

		if (Sivu === 1)
		{
			return <EtuSivu/>;
		}
		else if (Sivu === 2)
		{
			return <Ilmoitukset/>;
		}
		else if (Sivu === 3)
		{
			return <IsannoitsijaHenkilot/>;
		}
		else if (Sivu === 4)
		{
			return <IsannoitsijaIlmoitukset/>;
		}
		else if (Sivu === 5)
		{
			return <IsannoitsijaEtuSivu/>;
		}
		else if (Sivu === 6)
		{
			return <Ilmoituslomake/>;
		}
		else if (Sivu === 7)
		{
			return <Tiedot/>;
		}
		else if (Sivu === 8)
		{
			return <IsannoitsijaTiedot/>;
		}
		else if (Sivu === 9)
		{
			return <IsannoitsijaTaloyhtiot/>;
		}
	}

	render()
	{
<<<<<<< HEAD
		let tempView = {}
		if (this.props.notificationsList.length === 0) {
			tempView = <p>Nothing on the list</p>
		} else {
			tempView = this.props.notificationsList.map((notification) => 
				<tr key={notification._id}>
				<td>{notification.title}</td>
				<td>{notification.message}</td>
				</tr>
			)
		}
		return (    
			<div>			
				{this.naytaSivu(9)}
				{tempView}
			</div>	  
=======

		return (
			<div>
				{this.naytaSivu(1)}
			</div>
>>>>>>> 47ede1a446398ec7a56bd364e3860f71d95f34de
		);
	}
}
