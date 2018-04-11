import React from 'react';

export default class EtuSivu extends React.Component
{
	render() {

		let listView = [];

		if (this.props.checkedNotifications.length === 0) {
			listView = <tr><td colSpan="11"><p>Ei aktiivisia ilmoituksia</p></td></tr>
		} else {

			listView = this.props.checkedNotifications.map((notification) =>
				<tr key={notification.id}>

					<td>
						<a href="#" data-toggle="modal" data-target={`#${notification.id}`}>{notification.title}</a>
					</td>

					<td colSpan="2">{notification.sent_date}</td>
					<td colSpan="3">{notification.id_user}</td>
					<td colSpan="3">{notification.notif_type}</td>
				</tr>
			)

		}
		return (
			<tbody>
				{listView}
			</tbody>

		);
	}
	/*
	render()
	{
		return (
			<tr>
				<td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(5);"><a href="index.html">Naapuri juhliii</a></td>
				<td>01.2.2018 00:30</td>
				<td colSpan="3">Pekka Töpöhäntä</td>
				<td colSpan="3">Häiriöilmoitus</td>
				<td>Kuitattu 02.02.2018 09:15 - Isännöitsijä Jonne</td>
		    </tr>
		);
	}
	*/
}
