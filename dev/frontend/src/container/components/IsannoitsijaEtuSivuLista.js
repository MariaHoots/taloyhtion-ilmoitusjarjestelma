import React from 'react';


export default class EtuSivu extends React.Component {

	render() {

		let listView = {}

		if (this.props.notificationsList.length === 0) {
			listView = <tr><td colSpan="8"><p>Ei taloyhtiöitä listassa</p></td></tr>
		} else {
			listView = this.props.notificationsList.map((notif) =>
				<tr key={notif.id}>
            <td ><a href="/">{notif.title}</a></td>
            <td>{notif.sent_date}</td>
            <td>{notif.first_name} {notif.last_name}</td>
            <td>{notif.topic}</td>
            <td><a href="/"><img src="img/vastaanotettu.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				</tr>
			)
		}
		return (
			<tbody>
				{listView}
			</tbody>

		);
	}
}
