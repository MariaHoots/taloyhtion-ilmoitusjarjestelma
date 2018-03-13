import React from 'react';
import TopMenu from './components/TopMenu';


export default class ContainerTop extends React.Component {
  render() {
    return (   
	 <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
		  <a href="index.html" class="navbar-brand">TIJ</a>
		  <TopMenu/>
		</nav>
    );
  }
}
