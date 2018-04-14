import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class IsannoitsijaHenkilot extends React.Component 
{	

	componentDidMount() {
			

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
										   notificationsList={this.props.notificationsList}
										   getNotificationsByUidStatus={this.props.getNotificationsByUidStatus}
											 setAppPropsState={this.props.setAppPropsState}
											 getUsers={this.props.getUsers}/>

			  </table>
			  </div>
			</div>
		);
	}
}
