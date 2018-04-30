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
			houses:[
				["osoite1", "zip1", "kaupunki1",[["9","A"],["2","A"],["3","A"],["4","B"],["5","B"],["6","B"]]],
				["osoite2", "zip2", "kaupunki2",[["7","C"],["8","C"]]]
			]
		
		}
	}


	
	onFormChange = (event) => {

	}

	delHouse = (event) => {
		let tempHousesList = this.state.houses;
		tempHousesList.splice(event.target.name,1);
		this.setState({
			houses:tempHousesList
		});
	}

	delFlat = (event) => {
		let ids = event.target.name.split(",");
		this.setState({
			...this.state.houses[ids[0]][3].splice(ids[1],1)
		});
	}

	newHouse = (event) => {
		let tempHousesList = this.state.houses;
		tempHousesList.push(["Osoite", "Postinumero", "Kaupunki",[]]);
		this.setState({
			houses:tempHousesList
		});

	}

	newFlat = (event) => {
		let tempHousesList = this.state.houses;
		tempHousesList[event.target.name][3].push(["Asunto", "Rappu"]);
		this.setState({
			houses:tempHousesList
		});

	}

	render() {
		let listView = {}

		if (this.state.houses.length === 0) {
			listView = <div className="form-row">Lisää talo painamalla linkkiä.</div>
		} else {
			listView = this.state.houses.map((houses,index) =>
			<div key={index}>
				<div className="form-row">
					<div className="col-md-1">Talo {index+1}</div>
					<div className="col-md-2"><input type="text" className="form-control" name="address" defaultValue={houses[0]}></input></div>
					<div className="col-md-2"><input type="text" className="form-control" name="zip" defaultValue={houses[1]}></input></div>
					<div className="col-md-2"><input type="text" className="form-control" name="city" defaultValue={houses[2]}></input></div>
					<div className="col-md-2"><Link to="/" data-toggle="modal" name={index} onClick={this.newFlat}>Lisää Asunto</Link></div>
					<div className="col-md-2"><Link to="/" data-toggle="modal" name={index} onClick={this.delHouse}>Poista talo</Link></div>
				</div>
				<div className="form-row"><label>Talon {index+1} Asunnot</label></div>

				{
				houses[3].map((flats,index2) => {
					return <div className="form-row" key={index+","+index2}>
		
								<div className="col-md-2"><input type="text" className="form-control" name="flatnumber" defaultValue={flats[0]}></input></div>
								<div className="col-md-2"><input type="text" className="form-control" name="stairway" defaultValue={flats[1]}></input></div>
								<div className="col-md-2"><Link to="/" data-toggle="modal" name={index+","+index2} onClick={this.delFlat}>Poista asunto</Link></div>
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