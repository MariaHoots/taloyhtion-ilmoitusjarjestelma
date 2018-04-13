import React, { Component } from 'react';
import ContainerTop from './container/ContainerTop';
import ContainerMid from './container/ContainerMid';
import ContainerContents from './container/ContainerContents';
import ContainerBottom from './container/ContainerBottom';
import Login from './container/Login';
import Crypto from './Crypto';


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//not logged in group 0 (3:admin| 2:huoltomies | 1:asukas)
			userGroup:0,
			isLogged:false,
			token:"",
			salt:'jg#¤gdml5begf%Wgwerbewegewbmwvie4WEGobw',
			notificationsList: [],
			userList: [],
			housingCompList:[],
			sortSettings:{
				usersSortNameAddress:0,
				usersSortAsc:0,
				companySortAsc:0,
				companySortNameAddress:0,
				notificationSortAsc:0,
				notificationSortDate:0
			}
		}
	}

	componentDidMount() {
		if(!sessionStorage.getItem("loginStatus")){
			sessionStorage.setItem("token2","");
			sessionStorage.setItem("loginStatus","not logged");
			sessionStorage.setItem("token","");
			return;
		}

		let usergroup=0;
		let cr =  new Crypto();

		let loginStatus = sessionStorage.getItem("loginStatus");
		let token = sessionStorage.getItem("token");
		let token2 = sessionStorage.getItem("token2");


		if (token2 === cr.returnHash(token + "0" + this.state.salt)){
			usergroup = 0;
			return;
		}
		else if (token2 === cr.returnHash(token + "1" + this.state.salt)){
			usergroup = 1;
		}
		else if (token2 === cr.returnHash(token + "1" + this.state.salt)){
			usergroup = 1;
		}
		else if (token2 === cr.returnHash(token + "3" + this.state.salt)){
			usergroup = 3;
		}
		else {
			this.onLogout();
			return;
		}

		if(loginStatus === "logged") {
			this.setState({
				isLogged:true,
				token:token,
				userGroup:usergroup
			})
		}
	}

	getHousingCompanies = () => {
		let onGetHousingCompanyList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/api/housingcomp",onGetHousingCompanyList).then((response) => {
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

// get all users
	getUsers = () => {
		let onGetUser = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/api/users",onGetUser).then((response) => {
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

// get one user by id
	getUser = (id) => {
		let onGetUser = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/api/users"+id,onGetUser).then((response) => {
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

	// add one user
		addUser = (user) => {
			let onAddUser = {
				method:"PUT",
				mode:"cors",
				headers:{"Content-Type":"application/json",
				body:JSON.stringify({user}),
				"token":this.state.token}
			}
			fetch("/api/users/",onAddUser).then((response) => {
				if(response.ok) {
					response.json().then((data) => {
							this.getUsers();
							this.setState({userList:data})
					})
				} else {
					console.log(response.statusText);
				}
			}).catch((error) => {
				console.log(error);
			});
		}

	// updaqte a user
		updateUser = (user) => {
			let onUpdUser = {
				method:"POST",
				mode:"cors",
				headers:{"Content-Type":"application/json",
				body:JSON.stringify({user}),
				"token":this.state.token}
			}
			fetch("/api/users/",onUpdUser).then((response) => {
				if(response.ok) {
					response.json().then((data) => {
							this.getUsers();
							this.setState({userList:data})
					})
				} else {
					console.log(response.statusText);
				}
			}).catch((error) => {
				console.log(error);
			});
		}

// get all notifications
	getNotifications = () => {
		let onGetNotificationList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/api/notifications",onGetNotificationList).then((response) => {
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
// get one notification by id
	getNotification = (id) => {
		let onGetNotification = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/api/notifications/"+id,onGetNotification).then((response) => {
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

// get notifications of one user by status
	getNotificationsByUidStatus = (uid,status) => {
		let onGetNotificationList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
		}
		fetch("/apim/notifications/"+uid+"/"+status,onGetNotificationList).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						notificationsList:data
						
					});
					console.log(this.notificationsList);
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
	}

// add one notification
	addNotification = (notification) => {
		let onAddNotification = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			body:JSON.stringify({notification}),
			"token":this.state.token}
		}
		fetch("/api/notifications/",onAddNotification).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
						this.getNotifications();
						this.setState({notificationsList:data})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
	}

// update a notification
	updateNotification = (notification) => {
		let onUpdNotification = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			body:JSON.stringify({notification}),
			"token":this.state.token}
		}
		fetch("/api/notifications/",onUpdNotification).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
						this.getNotifications();
						this.setState({notificationsList:data})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	onLogin = (user) => {
		let usergroup=0;
		let cr =  new Crypto();

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

					if (data.token2 === cr.returnHash(data.token + "0" + this.state.salt)){
						usergroup = 0;
					}
					else if (data.token2 === cr.returnHash(data.token + "1" + this.state.salt)){
						usergroup = 1;
					}
					else if (data.token2 === cr.returnHash(data.token + "1" + this.state.salt)){
						usergroup = 1;
					}
					else if (data.token2 === cr.returnHash(data.token + "3" + this.state.salt)){
						usergroup = 3;
					}

					this.setState({
						token:data.token,
						userGroup:usergroup,
						isLogged:true
					})
					sessionStorage.setItem("token",data.token);
					sessionStorage.setItem("token2",data.token2);
					sessionStorage.setItem("loginStatus","logged");
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		})
	}

	onLogout = () => {
		console.log("logout");
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
					userGroup:0,
					isLogged:false
				})
				sessionStorage.setItem("loginStatus","not logged");
				sessionStorage.setItem("token2","");
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
					<ContainerTop
									userGroup={this.state.userGroup}
					 				onLogout={this.onLogout}/>
					<ContainerMid/>
					{this.state.isLogged === false &&
					<Login onLogin={this.onLogin}/>
					}
					{this.state.isLogged === true &&
					<ContainerContents
										getNotifications={this.getNotifications}
									  getNotificationsByUidStatus={this.getNotificationsByUidStatus}
									  getUsers={this.getUsers}
									  getHousingCompanies={this.getHousingCompanies}

										addNotification={this.addNotification}
										addUser={this.addUser}

										updateNotification={this.updateNotification}
										updateUser={this.updateUser}

									  onLogin={this.onLogin}
									  onLogout={this.onLogout}

									  notificationsList={this.state.notificationsList}
									  userList={this.state.userList}
									  housingCompList={this.state.housingCompList}

									  sortSettings={this.state.sortSettings}
									  

									  isLogged={this.state.isLogged}
									  userGroup={this.state.userGroup}
									  token={this.state.token}
										/>
					}
					<ContainerBottom/>
				</div>
			</div>
		);
	}
}
