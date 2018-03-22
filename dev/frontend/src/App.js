import React, { Component } from 'react';
import ContainerTop from './container/ContainerTop';
import ContainerMid from './container/ContainerMid';
import ContainerContents from './container/ContainerContents';
import ContainerBottom from './container/ContainerBottom';


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//not logged in group 0 (3:admin| 2:huoltomies | 1:asukas)
			userGroup:3,
			token:"",
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

	onLogin = (user) => {
		let onLogin = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"uname":user.uname,
				"passphrase":user.passphrase
			})
		}	
		fetch("/login",onLogin).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						token:data.token,
						userGroup:data.role
					})
					sessionStorage.setItem("loginStatus","logged");
					sessionStorage.setItem("token",data.token);
					this.getCarList();
				})
			} else {
				console.log(response.statusText);
			}	
		}).catch((error) => {
			console.log(error);
		})
		
	}
	
	onLogout = () => {
		
		let onLogout = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token}
		}
		fetch("/logout",onLogout).then((response) => {
			if(response.ok) {
				this.setState({
					token:"",
					isLogged:false
				})
				sessionStorage.setItem("loginStatus","not logged");
				sessionStorage.setItem("token","");
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		})
	}





	render() {
		return (
			<div className="App">
				<div className="container">
					<ContainerTop userGroup={this.state.userGroup}/>
					<ContainerMid/>
					<ContainerContents getNotifications={this.getNotifications}
									   getUsers={this.getUsers}
									   onLogin={this.onLogin}
									   onLogout={this.onLogout}
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
