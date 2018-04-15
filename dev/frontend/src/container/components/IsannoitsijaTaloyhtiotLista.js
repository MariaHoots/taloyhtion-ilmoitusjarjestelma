import React from 'react';
import {Link} from 'react-router-dom';


export default class EtuSivu extends React.Component {

	linkClickEvent = (event) =>{
		if (event.target.name === "redirecttousers"){
		
			this.props.setCurrentHousingCompany(event.target.id);
		}
	}


	render() {

		let listView = {}

		if (this.props.housingCompList.length === 0) {
			listView = <tr><td colSpan="8"><p>Ei taloyhtiöitä listassa</p></td></tr>
		} else {
			listView = this.props.housingCompList.map((housingComp) =>
				<tr key={housingComp.id}>
					<th scope="row">{housingComp.newnotifs > 0 && 
					"*"
					}</th>

					<td colSpan="3">

						<a href="/" data-toggle="modal" data-target={`#${housingComp.id}`}>{housingComp.name}</a>

							<div className="modal fade" id={`${housingComp.id}`} tabIndex="-1" role="dialog" aria-labelledby={`${housingComp.name}`} aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							      <div className="modal-header">
							        <h5 className="modal-title" id={`${housingComp.name}`}>Muokkaa yhtiötä: {housingComp.name}</h5>
							        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true">&times;</span>
							        </button>
							      </div>
							      <div className="modal-body">

											<form>
											  <div className="form-group">
											    <label htmlFor="name">Nimi</label>
											    <input type="text" className="form-control" id="name" defaultValue={`${housingComp.name}`}></input>
												</div>
												<div className="form-group">
											    <label htmlFor="address">Osoite</label>
											    <input type="text" className="form-control" id="address" defaultValue={`${housingComp.address}`}></input>
												</div>
												<div className="form-group">
											    <label htmlFor="zip">Postinumero</label>
											    <input type="text" className="form-control" id="zip" defaultValue={`${housingComp.zip}`}></input>
												</div>
												<div className="form-group">
											    <label htmlFor="city">Kaupunki</label>
											    <input type="text" className="form-control" id="city" defaultValue={`${housingComp.city}`}></input>
												</div>
												<div className="form-group">
											    <label htmlFor="business_id">Y-tunnus</label>
											    <input type="text" className="form-control" id="business_id" defaultValue={`${housingComp.business_id}`}></input>
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

					<td colSpan="3">{housingComp.address}, {housingComp.city}</td>
		
					<td>
					
						<Link to="/admin_henkilot" data-toggle="modal" onClick={this.linkClickEvent}><img src="img/henkilot.svg" id={housingComp.id} name="redirecttousers" className="img-fluid" alt="[H]" height="20" width="20"/></Link>
						<a href="/admin_ilmoitukset"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
						<a href="/" data-toggle="modal" data-target={`#${housingComp.id}`}><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					
						
					
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
}
