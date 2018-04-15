import React from 'react';
import {Link} from 'react-router-dom';

export default class EtuSivu extends React.Component {

	changeStatus = (event) =>{
		if (event.target.name === "received"){
			this.props.updateNotificationStatus(event.target.id,1);
		}
		if (event.target.name === "beingworked"){
			this.props.updateNotificationStatus(event.target.id,2);
		}
		if (event.target.name === "cancelled"){
			this.props.updateNotificationStatus(event.target.id,3);
		}
		if (event.target.name === "done"){
			this.props.updateNotificationStatus(event.target.id,4);
		}

	
	}


	render() {

		let listView = {}

		if (this.props.notificationsList.length === 0) {
			listView = <tr><td colSpan="8"><p>Ei taloyhtiöitä listassa</p></td></tr>
		} else {
			listView = this.props.notificationsList.map((notif) =>
				<tr key={notif.id}>
            <td ><Link to="/" data-toggle="modal">{notif.title}</Link></td>
            <td>{notif.sent_date}</td>
            <td>{notif.first_name} {notif.last_name}</td>
            <td>{notif.topic}</td>
            <td><Link to="/" data-toggle="modal" onClick={this.changeStatus}><img src="img/vastaanotettu.svg" id={notif.id} name="received" className="img-fluid" alt="[H]" height="20" width="20"/></Link> <Link to="/" data-toggle="modal" onClick={this.changeStatus}><img src="img/tyonalla.svg" id={notif.id} name="beingworked" className="img-fluid" alt="[H]" height="20" width="20"/></Link> <Link to="/" data-toggle="modal" onClick={this.changeStatus}><img src="img/keskeytynyt.svg" id={notif.id} name="cancelled" className="img-fluid" alt="[H]" height="20" width="20"/></Link> <Link to="/" data-toggle="modal" onClick={this.changeStatus}><img src="img/valmis.svg" id={notif.id} name="done" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td>
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
