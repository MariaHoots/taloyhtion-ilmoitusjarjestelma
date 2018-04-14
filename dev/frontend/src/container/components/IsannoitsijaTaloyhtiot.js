import React from 'react';
import IsannoitsijaTaloyhtiotLista from './IsannoitsijaTaloyhtiotLista';
import {Link} from 'react-router-dom';
import Sorter from '../../Sorter';



export default class EtuSivu extends React.Component {

	componentDidMount() {
		this.props.getHousingCompanies();
	}

	onChange = (event) => {
		
		if (event.target.value.length > 0)
			{
			if(event.target.name === "yhtiotHaeYhtionNimella") {
				this.props.getCompaniesByName(event.target.value);
			}
			if(event.target.name === "yhtiotHaeOsoitteella") {
				this.props.getCompaniesByAddress(event.target.value);
			}
		}
		else{
			this.props.getHousingCompanies();

		}
	}

	sortEvent = (event) => {
		let temphousingCompList = this.props.housingCompList;
		let sorter = new Sorter();
		
			if (event.target.name === "sortaddressdown"){
				temphousingCompList = sorter.sortArrayByField(temphousingCompList,"address",1);
				this.props.setCompanyPropsState(temphousingCompList);
			}
			if (event.target.name === "sortaddressup"){
				temphousingCompList = sorter.sortArrayByField(temphousingCompList,"address",-1);
				this.props.setCompanyPropsState(temphousingCompList);
			}
			if (event.target.name === "sortnamedown"){
				temphousingCompList = sorter.sortArrayByField(temphousingCompList,"name",1);
				this.props.setCompanyPropsState(temphousingCompList);
		
			}
			if (event.target.name === "sortnameup"){
				temphousingCompList = sorter.sortArrayByField(temphousingCompList,"name",-1);
				this.props.setCompanyPropsState(temphousingCompList);
			}
	}




	render() {
		return (
			<div className="card">
			  <div className="card-body">
			   	<h3>Talonyhtiöt</h3>
				  <table className="table table-bordered">
					<thead>
					  <tr>
							<th scope="row"></th>
							<th scope="row" colSpan="3">Yhtiön nimi</th>
							<th scope="row" colSpan="3">Osoite</th>
							<th scope="row">Toiminnot</th>
					 </tr>
					</thead>
					<thead>
					<tr>
					<th scope="row"><a href="index.html"><img src="img/sort.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></th>
					<td><input type="text" className="form-control" name="yhtiotHaeYhtionNimella" placeholder="Yhtiön nimi" onChange={this.onChange}/></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysylos.svg" name="sortnameup" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysalas.svg" name="sortnamedown" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td>
					<td><input type="text" className="form-control" name="yhtiotHaeOsoitteella" placeholder="Osoite" onChange={this.onChange}/></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysylos.svg" name="sortaddressup" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td><td><Link to="/" data-toggle="modal" onClick={this.sortEvent}><img src="img/jarjestysalas.svg" name="sortaddressdown" className="img-fluid" alt="[H]" height="20" width="20"/></Link></td>


					<td></td>
					</tr>
					</thead>

					<IsannoitsijaTaloyhtiotLista housingCompList={this.props.housingCompList}/>

				  </table>
				</div>
			</div>

		);
	}
}
