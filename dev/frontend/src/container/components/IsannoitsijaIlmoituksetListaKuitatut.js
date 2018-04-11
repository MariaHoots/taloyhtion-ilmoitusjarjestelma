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

							<div className="modal fade" id={`${notification.id}`} tabIndex="-1" role="dialog" aria-labelledby={`${notification.name}`} aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							      <div className="modal-header">
							        <h5 className="modal-title" id={`${notification.id}`}>{notification.title}</h5>
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      <div className="modal-body">

											<table class="table table-bordered">
												<tbody>
													<tr>
														<th>Ilmoitustyyppi</th>
														<td colspan="3">{notification.notif_type}</td>
													</tr>
													<tr>
														<th>Talonyhtiö</th>
														<td>{notification.id_housing_C}</td>
														<th>x</th>
														<td>x</td>
													</tr>
													<tr>
														<th>Lähettäjä</th>
														<td colspan="3">{notification.id_user}</td>
													</tr>
													<tr>
														<th>Osoite</th>
														<td>x</td>
														<th>x</th>
														<td>x</td>
													</tr>
													<tr>
														<th>Postitoimipaikka</th>
														<td colspan="3">x</td>
													</tr>
													<tr>
														<th>Puhelin</th>
														<td>x</td>
														<th>x</th>
														<td>x</td>
													</tr>
													<tr>
														<th colspan="4">Kuvaus</th>
													</tr>
													<tr>
														<td colspan="4">{notification.message}</td>
													</tr>
												</tbody>
											</table>

											<form>
												<label for="statusChange">Muuta tilaa:</label>
												<a href="#"><img src="img/vastaanotettu.svg" className="img-fluid" alt="[H]" width="20" height="20" /></a>
												<a href="#"><img src="img/tyonalla.svg" className="img-fluid" alt="[H]" width="20" height="20" /></a>
												<a href="#"><img src="img/keskeytynyt.svg" className="img-fluid" alt="[H]" width="20" height="20" /></a>
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

					<td>{notification.sent_date}</td>
					<td colSpan="3">{notification.id_user}</td>
					<td colSpan="3">{notification.notif_type}</td>
					<td>{notification.id_checkout}</td>
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
