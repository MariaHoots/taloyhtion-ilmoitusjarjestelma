import React from 'react';

export default class EtuSivu extends React.Component 
{

	render() 
	{
		let tempView = {}
		if (this.props.userList.length === 0) {
			tempView = <tr><td>Nothing on the list</td></tr>
		} else {
			tempView = this.props.userList.map((list) => 
				<tr key={list._id}>
				<td colspan="3" ><a href="index.html">{list.first_name} {list.last_name}</a></td>
			<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
			<td><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
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
