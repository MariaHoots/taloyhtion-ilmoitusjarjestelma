import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class EtuSivu extends React.Component 
{
		constructor(props) {
			super(props);
		}

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

				<IsannoitsijaHenkilotLista userList={this.props.userList}/>

			  </table>
			  </div>
			</div>
		);
	}
}
