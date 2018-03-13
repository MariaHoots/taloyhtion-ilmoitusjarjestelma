import React from 'react';
import TopMenuAsukas from './TopMenuAsukas';
import TopMenuIsannoitsija from './TopMenuIsannoitsija';

export default class TopMenu extends React.Component {
	naytaSivu = (sivu) => 
	{
		let Sivu = sivu;
		
		if (Sivu === 1)
		{
			return <TopMenuAsukas/>;
		}	
		else if (Sivu === 2)
		{
			return <TopMenuIsannoitsija/>;
		}
	}
	
	
  render() {
    return (
		<div>
		{this.naytaSivu(1
		)}
		</div>
    );
  }
}
