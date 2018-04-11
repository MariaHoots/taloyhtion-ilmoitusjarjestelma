import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class EtuSivu extends React.Component 
{	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
			this.props.getUsers();

	}

	render() {
		//this.props.getNotificationsByUidStatus(1,1);
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

				<IsannoitsijaHenkilotLista userList={this.props.userList}
																	 getNotificationsByUidStatus={this.props.getNotificationsByUidStatus}/>

			  </table>
			  </div>
			</div>
		);
	}
}
