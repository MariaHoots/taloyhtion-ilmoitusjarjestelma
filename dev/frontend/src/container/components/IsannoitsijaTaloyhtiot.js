import React from 'react';

import IsannoitsijaTaloyhtiotLista from './IsannoitsijaTaloyhtiotLista';

export default class EtuSivu extends React.Component
{
	render()
	{
		return (
			<div className="card">
			  <div className="card-body">
			   <h3>Talonyhtiöt</h3>
			  <table className="table table-bordered">
				<thead>
				  <tr>
						<th scope="row"></th>
						<th scope="row" colSpan="3">Yhtiön nimi</th>
						<th scope="row" colSpan="3">Osoite</th>
						<th scope="row">Toiminnot</th>
				 </tr>
				</thead>
				<tbody>
				<tr>
				<th scope="row"><a href="index.html"><img src="img/sort.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></th>
				<td><input type="text" className="form-control" id="yhtiotHaeYhtionNimellä" placeholder="Yhtiön nimi"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				<td><input type="text" className="form-control" id="yhtiotHaeOsoitteella" placeholder="Osoite"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>


				<td></td>
				</tr>

				<IsannoitsijaTaloyhtiotLista/>


				</tbody>
			  </table>
			  </div>
			</div>
		);
	}
}
