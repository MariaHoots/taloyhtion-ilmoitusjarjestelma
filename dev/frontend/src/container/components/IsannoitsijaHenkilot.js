import React from 'react';

import IsannoitsijaHenkilotLista from './IsannoitsijaHenkilotLista';

export default class IsannoitsijaHenkilot extends React.Component 
{	

	componentDidMount() {
		this.props.setPageTittle("Henkilölistaus");

		if (this.props.currentHousingCompany > 0){
			this.props.getUsersByHousingCompany(this.props.currentHousingCompany);
		}
		else {
			this.props.getUsers();
		}
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

				<IsannoitsijaHenkilotLista userList={this.props.userList}
										   notificationsList={this.props.notificationsList}
										   getNotificationsByUidStatus={this.props.getNotificationsByUidStatus}
										   setUserPropsState={this.props.setUserPropsState}
										   updateUser={this.props.updateUser}
										   updateUserByAdmin={this.props.updateUserByAdmin}
										   getUsers={this.props.getUsers}
										   getUsersByName={this.props.getUsersByName}
										   getUsersByAddress={this.props.getUsersByAddress}
										   currentHousingCompany={this.props.currentHousingCompany}
										   getUsersByHousingCompany={this.props.getUsersByHousingCompany}/>

			  </table>
			  </div>
			</div>
		);
	}
}
