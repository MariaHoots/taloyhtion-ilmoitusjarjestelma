import React from 'react';

export default class IsannoitsijaHenkilotListaNotifications extends React.Component 
{

	render() 
	{
		
		let tempView = {}
		if (this.props.notificationsList.length === 0) {
			tempView = <tr><td>Ei uusia ilmoituksia.</td></tr>
		} else {
			tempView = this.props.notificationsList.map((list) => 
			<tr key={list.id}>
				<td><a href="/ilmoitus">{list.title}</a></td>
				<td>{list.sent_date}</td>
		   </tr>
			)
		}

		return (
			<tbody>
				{tempView}
			</tbody>
		);
	}
}
