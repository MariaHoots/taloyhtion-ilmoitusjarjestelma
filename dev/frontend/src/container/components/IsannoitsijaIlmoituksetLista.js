import React from 'react';
import {Link} from 'react-router-dom';
import {getIlmoitustyyppiById} from '../../Helper.js';

export default class EtuSivu extends React.Component{
	changeStatus = (event) =>{
		if (event.target.name === "received"){
			this.props.updateNotificationStatus(event.target.id,1,0);
		}
		if (event.target.name === "beingworked"){
			this.props.updateNotificationStatus(event.target.id,2,0);
		}
		if (event.target.name === "cancelled"){
			this.props.updateNotificationStatus(event.target.id,3,0);
		}
		if (event.target.name === "done"){
			this.props.updateNotificationStatus(event.target.id,4,0);
		}

	
	}

	render() {

		let listView = [];

		if (this.props.activeNotifications.length === 0) {
			listView = <tr><td colSpan="11"><p>Ei aktiivisia ilmoituksia</p></td></tr>
		} else {

			listView = this.props.activeNotifications.map((notification) =>
				<tr key={notification.id}>
					<td>
						<a href="/" data-toggle="modal" data-target={`#${notification.id}`}>{notification.title}</a>

							<div className="modal fade" id={`${notification.id}`} tabIndex="-1" role="dialog" aria-labelledby={`${notification.name}`} aria-hidden="true">
							  <div className="modal-dialog" role="document" style={{maxWidth:'800px'}}>
							    <div className="modal-content">
							      <div className="modal-header">
							        <h5 className="modal-title" id={`${notification.id}`}>{notification.title}</h5>
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      <div className="modal-body">

											<table className="table table-bordered">
												<tbody>
													<tr>
														<th>Ilmoitustyyppi</th>
														<td colSpan="3">{getIlmoitustyyppiById(notification.notif_type)}</td>
													</tr>
													<tr>
														<th>Talonyhtiö</th>
														<td>{notification.name}</td>
														<th>Huoneisto</th>
														<td>x</td>
													</tr>
													<tr>
														<th>Lähettäjä</th>
														<td colSpan="3">{notification.fullname}</td>
													</tr>
													<tr>
														<th>Osoite</th>
														<td>{notification.billing_address}</td>
														<th>Postinumero</th>
														<td>{notification.ub_zip}</td>
													</tr>
													<tr>
														<th>Postitoimipaikka</th>
														<td colSpan="3">{notification.ub_city}</td>
													</tr>
													<tr>
														<th>Puhelin</th>
														<td>{notification.phone}</td>
														<th>Sähköposti</th>
														<td>{notification.email}</td>
													</tr>
													<tr>
														<th colSpan="4">Kuvaus</th>
													</tr>
													<tr>
														<td colSpan="4">{notification.message}</td>
													</tr>
												</tbody>
											</table>

											<form>
												<label htmlFor="statusChange">Muuta tilaa:</label>
												<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
							{(notification.status === 1) ? (
									<img src="img/vastaanotettu.svg"  className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/vastaanotettu.svg" id={notification.id} name="received" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
							<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 2) ? (
									<img src="img/tyonalla.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/tyonalla.svg" id={notification.id} name="beingworked" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
							<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 3) ? (
									<img src="img/keskeytynyt.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/keskeytynyt.svg" id={notification.id} name="cancelled" className="img-fluid " alt="[H]" height="20" width="20"/>
							)}
							</Link>
							<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 4) ? (
									<img src="img/valmis.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/valmis.svg" id={notification.id} name="done" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
												<div className="form-row">
													<label htmlFor="exampleFormControlTextarea1">Kommentti</label>
													<textarea className="form-control" id="isannoijaIlmoituksetKommenttiTextarea" rows="3" defaultValue={notification.checkout_message}></textarea>
												</div>
												</form>

							      </div>
							      <div className="modal-footer">
							        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
							        <button type="button" className="btn btn-primary">Tallenna</button>
							      </div>
							    </div>
							  </div>
							</div>

					</td>

					<td colSpan="2"><small>
						{new Date(notification.sent_date).toLocaleString("fi-FI")}
						</small>
					</td>
					<td colSpan="3">{notification.fullname}</td>
					<td colSpan="3">{getIlmoitustyyppiById(notification.notif_type)}</td>

					<td>
						<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
							{(notification.status === 1) ? (
									<img src="img/vastaanotettu.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/vastaanotettu.svg" id={notification.id} name="received" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
						<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 2) ? (
									<img src="img/tyonalla.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/tyonalla.svg" id={notification.id} name="beingworked" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
						<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 3) ? (
									<img src="img/keskeytynyt.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/keskeytynyt.svg" id={notification.id} name="cancelled" className="img-fluid " alt="[H]" height="20" width="20"/>
							)}
							</Link>
						<Link to="/" data-toggle="modal" onClick={this.changeStatus}>
						{(notification.status === 4) ? (
									<img src="img/valmis.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/>
								) : (
									<img src="img/valmis.svg" id={notification.id} name="done" className="img-fluid" alt="[H]" height="20" width="20"/>
							)}
							</Link>
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
			  <td colSpan="2">15.2.2018 09:15</td>
			  <td colSpan="3">Taavetti Tompainen</td>
			  <td colSpan="3">Muu palaute</td>
			  <td><a href="index.html"><img src="img/vastaanotettu.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" className="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
			  </td>
		</tr>
		);
	}
	*/
}
