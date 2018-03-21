import React, { Component } from 'react';
import ContainerTop from './container/ContainerTop';
import ContainerMid from './container/ContainerMid';
import ContainerContents from './container/ContainerContents';
import ContainerBottom from './container/ContainerBottom';


export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			//not logged in group 0 (3:admin| 2:huoltomies | 1:asukas)
			userGroup:3,
			notificationsList: [],
			userList: [],
			housingCompList:[]

		}
	}
	componentDidMount() {

		// TESTAUSTA VARTEN START
		this.getNotifications();
		this.getUsers();
		this.getHousingCompanies();
		// TESTAUSTA VARTEN END
		

	}

	getHousingCompanies = () => {
		let onGetHousingCompanyList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json"}
		}
		fetch("/api/housingcomp/",onGetHousingCompanyList).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						housingCompList:data
					})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});	
	}

	getUsers = () => {
		let onGetNotificationList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json"}
		}
		fetch("/api/users/",onGetNotificationList).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						userList:data
					})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
		
	}

	getNotifications = () => {
		let onGetNotificationList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json"}
		}
		fetch("/api/notifications/",onGetNotificationList).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						notificationsList:data
					})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
		
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<ContainerTop userGroup={this.state.userGroup}/>
					<ContainerMid/>
					<ContainerContents getNotifications={this.getNotifications}
									   getUsers={this.getUsers}
									   getHousingCompanies={this.getHousingCompanies}
									   notificationsList={this.state.notificationsList}
									   userList={this.state.userList}
									   housingCompList={this.state.housingCompList}
									   isLoggedIn={this.state.isLoggedIn}
									   userGroup={this.state.userGroup}
										/>
					<ContainerBottom/>
				</div>
			</div>
		);
	}
}
