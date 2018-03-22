import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class EtuSivu extends React.Component 
{	

	componentDidMount() {
			this.props.getUsers();	
	}

	
	render() {
		return (
			<div className="card">
			  <div className="card-body">
			   <h3>Henkilöt</h3>
			  <table className="table table-bordered">
				<thead>
				  <tr>
						<th scope="row" colSpan="3">Nimi</th>
						<th scope="row" colSpan="3">Osoite</th>
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
