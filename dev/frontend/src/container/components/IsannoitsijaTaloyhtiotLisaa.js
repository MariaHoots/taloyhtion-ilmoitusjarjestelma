import React from 'react';
import {Link} from 'react-router-dom';

export default class IsannoitsijaTaloyhtiotLisaa extends React.Component 
{	
	constructor(props) {
		super(props);
		
		this.state = {
			name:"testi",
			address:"",
			zip:"",
			city:"",
			business_id:"",
			houses:[]		
		}
	}
	
	onFormChange = (event) => {

	}

	delHouse = (event) => {
		let tempHousesList = this.state.houses;

		for (let i=0;i<tempHousesList.length;i++)
		{
			console.log(tempHousesList[i][0])
			if (tempHousesList[i][0]===parseInt(event.target.name,10))
			{
				tempHousesList.splice(i,1);
			}
		}
	
		this.setState({
			houses:tempHousesList
		});
		
	}

	delFlat = (event) => {
		let ids = event.target.name.split(",");
		console.log(this.state.houses[ids[0]][3])
		this.setState({
			...this.state.houses[ids[0]][4].splice(ids[1],1)
		});
	}

	newHouse = (event) => {
		let tempHousesList = this.state.houses;
		let uniqId = tempHousesList.length;
		tempHousesList.push([uniqId,"Osoite", "Postinumero", "Kaupunki",[]]);
		this.setState({
			houses:tempHousesList
		});

	}

	newFlat = (event) => {
		let tempHousesList = this.state.houses;
		let uniqId = tempHousesList[event.target.name][4].length;
		tempHousesList[event.target.name][4].push([uniqId,"Asunto", "Rappu"]);
		this.setState({
			houses:tempHousesList
		});
	}

	render() {
		let listView = {}
		let i=1;

		if (this.state.houses.length === 0) {
			listView = <div className="form-row">Lisää talo painamalla linkkiä.</div>
		} else {
			listView = this.state.houses.map((houses) =>
			<div key={houses[0]}>
				<div className="form-row">
					<div className="col-md-1">Talo {houses[0]+1}</div>
					<div className="col-md-2"><input type="text" className="form-control" name="address" defaultValue={houses[1]}></input></div>
					<div className="col-md-2"><input type="text" className="form-control" name="zip" defaultValue={houses[2]}></input></div>
					<div className="col-md-2"><input type="text" className="form-control" name="city" defaultValue={houses[3]}></input></div>
					<div className="col-md-2"><Link to="/" data-toggle="modal" name={houses[0]} onClick={this.newFlat}>Lisää Asunto</Link></div>
					<div className="col-md-2"><Link to="/" data-toggle="modal" name={houses[0]} onClick={this.delHouse}>Poista talo</Link></div>
				</div>
				<div className="form-row"><label>Talon {houses[0]+1} Asunnot</label></div>

				{
				houses[4].map((flats) => {
					return <div className="form-row" key={houses[0]+","+flats[0]}>
		
								<div className="col-md-2"><input type="text" className="form-control" name="flatnumber" defaultValue={flats[1]}></input></div>
								<div className="col-md-2"><input type="text" className="form-control" name="stairway" defaultValue={flats[2]}></input></div>
								<div className="col-md-2"><Link to="/" data-toggle="modal" name={houses[0]+","+flats[0]} onClick={this.delFlat}>Poista asunto</Link></div>
							</div>
							})
				}	
			
			</div>)
		}
		


		return (
			
			<div className="col">	
			
				<form>
					<div className="form-row">
					<div className="col-md-4"><label htmlFor="name">Nimi</label>
					<input type="text" className="form-control" name="name" onChange={this.onFormChange}></input></div>
					<div className="col-md-4"><label htmlFor="address">Osoite</label>
					<input type="text" className="form-control" name="address" onChange={this.onFormChange}></input></div>
					</div>
					<div className="form-row">
					<div className="col-md-4"><label htmlFor="zip">Postinumero</label>
					<input type="text" className="form-control" name="zip" onChange={this.onFormChange}></input></div>
					<div className="col-md-4"><label htmlFor="city">Kaupunki</label>
					<input type="text" className="form-control" name="city" onChange={this.onFormChange}></input></div>
					</div>

					<div className="form-row">
					<div className="col-md-4"><label htmlFor="business_id">Y-tunnus</label>
					<input type="text" className="form-control" name="business_id" onChange={this.onFormChange}></input></div>
					</div>
				</form>
				<br/>
				
				<div className="row">
				<Link to="/" data-toggle="modal"  onClick={this.newHouse}>Lisää talo</Link>
 			
				</div>

				<br/>

				<form>
					{listView}
				</form>

				<br/>
				<input type="submit"
				       	name="submit"
						value="Tallenna uusi yhtiö"
						className="btn btn-primary"/>
			  </div>
			
		);
	}
}