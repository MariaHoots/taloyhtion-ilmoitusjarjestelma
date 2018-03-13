import React, { Component } from 'react';
import ContainerTop from './container/ContainerTop';
import ContainerMid from './container/ContainerMid';
import ContainerContents from './container/ContainerContents';
import ContainerBottom from './container/ContainerBottom';


export default class App extends Component
{
	render()
	{
		return (
			<div className="App">
				<div class="container">
					<ContainerTop/>
					<ContainerMid/>
					<ContainerContents/>
					<ContainerBottom/>
				</div>
			</div>
		);
	}
}
