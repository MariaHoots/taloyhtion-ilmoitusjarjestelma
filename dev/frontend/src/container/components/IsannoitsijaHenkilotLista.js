import React from 'react';
import {Link} from 'react-router-dom';

import IsannoitsijaHenkilotListaNotifications from './IsannoitsijaHenkilotListaNotifications';

export default class IsannoitsijaHenkilotLista extends React.Component 
{
	componentDidMount() {
		
	}

	getNotificationsByUidStatus = (event) => {
	
		this.props.getNotificationsByUidStatus(event.target.name,1);		
	}

	sortEvent = (event) => {
	
		console.log(event.target.name);		
	}



	render() 
	{
		let tempView = {}
		if (this.props.userList.length === 0) {
			tempView = <tr><td>Etsitään henkilöitä..</td></tr>
		} else {
			tempView = this.props.userList.map((list) => 
			<tr key={list.id}>
					

					<th colSpan="3" scope="row">

						<Link to="/" data-toggle="modal" name={list.id} id={`#${list.id}`} data-target={`#${list.id}`} onClick={this.getNotificationsByUidStatus}>{list.last_name} {list.first_name}</Link>

							<div className="modal fade" id={`${list.id}`} tabIndex="-1" role="dialog" aria-labelledby={`${list.name}`} aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							      <div className="modal-header">
							        <h5 className="modal-title">{list.last_name} {list.first_name}</h5>
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      <div className="modal-body">
								  <h5>Tiedot:</h5>
								  <table>
										
											<tbody>
											<tr>
												<td>Nimi</td>
												<td>{list.last_name} {list.first_name}</td>
		   									</tr>
											   <tr>
												<td>Email</td>
												<td>{list.email}</td>
		   									</tr>	
											   <tr>
												<td>Puhelin</td>
												<td>{list.phone}</td>
		   									</tr>	
											   <tr>
												<td>Laskutusosoite</td>
												<td>{list.billing_address}</td>
		   									</tr>	
											   <tr>
												<td>Postinumero</td>
												<td>{list.zip}</td>
		   									</tr>	
											   <tr>
												<td>Kaupunki</td>
												<td>{list.city}</td>
		   									</tr>	
											</tbody>
										</table>
									<h5>Käyttäjän ilmoitukset:</h5>
										<table>
											<thead>
												<tr>
													<td>Otsikko</td>
													<td>Aika</td>
												</tr>
											</thead>
											
											<IsannoitsijaHenkilotListaNotifications notificationsList={this.props.notificationsList}/>	
											
										</table>

							      </div>
							      <div className="modal-footer">
							        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
				
						
							      </div>
								  <div className="modal-footer">
							        
									<button type="button" className="btn btn-alert" data-dismiss="modal">Poista käyttäjä</button>
						
							      </div>
							    </div>
							  </div>
							</div>

					</th>

					<td colSpan="3">{list.billing_address}</td>

					<td>
					<a href="/admin_ilmoitukset"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					<a href="/asetukset"><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					</td>

				</tr>
			)
		}

		return (
			<tbody>
				<tr>
				<td><input type="text" className="form-control" id="henkilotHaeNimellä" placeholder="Nimi"/></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysylos.svg" name="sortnameup" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysalas.svg" className="img-fluid" name="sortnamedown" alt="[H]" height="20" width="20"/></Link></td>
				<td><input type="text" className="form-control" id="henkilotHaeOsoitteella" placeholder="Osoite"/></td><td><Link to="/" data-toggle="modal" name="sortaddressup" onClick={this.sortEvent}><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td><td><Link to="/" data-toggle="modal" name="sortaddressdown" onClick={this.sortEvent}><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td>
				<td></td>

				</tr>
				
				
				{tempView}
				
				
			</tbody>
		);
	}
}
