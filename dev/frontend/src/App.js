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
			userGroup:3
		}
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<ContainerTop userGroup={this.state.userGroup}/>
					<ContainerMid/>
					<ContainerContents/>
					<ContainerBottom/>
				</div>
			</div>
		);
	}
}
