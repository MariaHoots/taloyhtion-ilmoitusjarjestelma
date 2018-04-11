import React from 'react';

export default class EtuSivu extends React.Component
{


	render() {

		let listView = [];

		if (this.props.activeNotifications.length === 0) {
			listView = <tr><td colSpan="11"><p>Ei aktiivisia ilmoituksia</p></td></tr>
		} else {

			listView = this.props.activeNotifications.map((notification) =>
				<tr key={notification.id}>

					<td>
						<a href="#" data-toggle="modal" data-target={`#${notification.id}`}>{notification.title}</a>

					</td>

					<td colSpan="2">{notification.sent_date}</td>
					<td colSpan="3">{notification.id_user}</td>
					<td colSpan="3">{notification.notif_type}</td>

					<td>
						<a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
					</td>

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
			  <td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(1);"><a href="index.html">Kissa katolla apua</a></td>
			  <td colspan="2">15.2.2018 09:15</td>
			  <td colspan="3">Taavetti Tompainen</td>
			  <td colspan="3">Muu palaute</td>
			  <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
			  </td>
		</tr>
		);
	}
	*/
}
