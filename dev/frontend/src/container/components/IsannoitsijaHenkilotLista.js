import React from 'react';

export default class EtuSivu extends React.Component 
{
/*
	<tr key={list._id}>
	<td colspan="3" ><a href="index.html">{list.first_name} {list.last_name}</a></td>
<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
	</tr>
*/
	getNotificationsByUser(uid,status)
	{
		this.props.getNotificationsByUser(uid,status);
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

						<a href="#" data-toggle="modal" data-target={`#${list.id}`}>{list.last_name} {list.first_name}</a>

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
								  <th5>Tiedot:</th5>
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
									<th5>Käyttäjän ilmoitukset:</th5>
										<table>
											<thead>
												<tr>
													<td>Otsikko</td>
													<td>Aika</td>
												</tr>
											</thead>
											<tbody>
											<tr>
												<td><a href="/ilmoitus">todo</a></td>
												<td>todo</td>
		   									</tr>	
											</tbody>
										</table>

							      </div>
							      <div className="modal-footer">
							        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
						
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
				<td><input type="text" className="form-control" id="henkilotHaeNimellä" placeholder="Nimi"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				<td><input type="text" className="form-control" id="henkilotHaeOsoitteella" placeholder="Osoite"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				<td></td>

				</tr>
				
				
				{tempView}
				
				
			</tbody>
		);
	}
}
