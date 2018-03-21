import React, { Component } from 'react';
import ContainerTop from './container/ContainerTop';
import ContainerMid from './container/ContainerMid';
import ContainerContents from './container/ContainerContents';
import ContainerBottom from './container/ContainerBottom';


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
			//not logged in group 0 (1 admin|2 huoltomies|3 asukas)
			userGroup:3,
			notificationsList: []

		}
	}
	componentDidMount() {
		this.getNotifications();
		

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
					//console.log(data);
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
										notificationsList={this.state.notificationsList}/>
					<ContainerBottom/>
				</div>
			</div>
		);
	}
}
