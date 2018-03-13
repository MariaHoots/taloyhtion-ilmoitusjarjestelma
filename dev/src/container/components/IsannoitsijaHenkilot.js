import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class EtuSivu extends React.Component 
{
	render() {
		return (
			<div class="card">
			  <div class="card-body">
			   <h3>Henkilöt</h3>
			  <table class="table table-bordered">
				<thead>
				  <tr>
						<th scope="row" colspan="3">Nimi</th>
						<th scope="row" colspan="3">Osoite</th>
						<th scope="row">Toiminnot</th>
				 </tr>
				</thead>
				<tbody>
				<tr>
				<td><input type="text" class="form-control" id="henkilotHaeNimellä" placeholder="Nimi"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				<td><input type="text" class="form-control" id="henkilotHaeOsoitteella" placeholder="Osoite"/></td><td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td><td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
				
		
				<td></td>
				</tr>
				
				
					<IsannoitsijaHenkilotLista/>
				
				
				</tbody>
			  </table>
			  </div>
			</div>
		);
	}
}
