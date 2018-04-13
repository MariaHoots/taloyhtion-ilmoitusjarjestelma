import React from 'react';

import IsannoitsijaIlmoituksetLista from './IsannoitsijaIlmoituksetLista';
import IsannoitsijaIlmoituksetListaKuitatut from './IsannoitsijaIlmoituksetListaKuitatut';

export default class EtuSivu extends React.Component {

  /*constructor(props) {
		super(props);
		this.state = {
			activeNotifications: [],
			checkedNotifications: []
		}
	}*/

  componentDidMount() {
    this.props.getNotifications();
  }



  render() {

    let activeNotifications = [];
    let checkedNotifications = [];

    for (let i = 0 ; i < this.props.notificationsList.length ; i++) {
      if (this.props.notificationsList[i].status !== 0) {
        //ignore deleted notifications
        if (this.props.notificationsList[i].status < 5) {
          //all status below 5 are active notifications
          activeNotifications.push(this.props.notificationsList[i]);
        } else {
          //only status 5
          checkedNotifications.push(this.props.notificationsList[i]);
        }
      }
    }

    return (
		<div className="card">
		  <div className="card-body">
				<h3>Aktiiviset ilmoitukset</h3>
		<table className="table table-bordered">
		  <thead>
		    <tr>
         <th>Ilmoitus</th>
         <th colSpan="2">Päivämäärä</th>
         <th colSpan="3">Ilmoittaja</th>
         <th colSpan="3">Ilmoitus</th>
         <th>Toiminnot</th>
		    </tr>
		  </thead>
		  <thead>
        <tr>
          <td></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><input type="text" className="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td>
        <select className="form-control" id="ilmoitustyyppi">
		  <option>Kaikki</option>
          <option>Vikailmoitus (H)</option>
          <option>Avaimet (H)</option>
          <option>Autopaikat (H)</option>
          <option>Saunavuorot (H)</option>
          <option>Lähtöilmoitus (I)</option>
          <option>Vastikeasiat (I)</option>
          <option>Häiriöilmoitus (I)</option>
          <option>Reklamaatio (I)</option>
          <option>Muu palaute (I)</option>
          <option>Yhteydenotto (I) (H)</option>
        </select></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td></td>
        </tr>
      </thead>


			<IsannoitsijaIlmoituksetLista  activeNotifications={activeNotifications}/>

		</table>

   <h3>Kuitatut ilmoitukset</h3>
   <table className="table table-bordered" id="oldElements">
     <thead className="thead-light">
       <tr>
         <th>Ilmoitus</th>
         <th>Päivämäärä</th>
         <th colSpan="3">Ilmoittaja</th>
         <th colSpan="3">Ilmoitus</th>
         <th>Kuittaus</th>
		    </tr>
		  </thead>
		  <thead>
       <tr>
         <td></td>
         <td></td>
         <td><input type="text" className="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><input type="text" className="form-control" id="ilmoitusHaeTyyppi" placeholder="Ilmoitus" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td></td>
       </tr>
      </thead>

		   <IsannoitsijaIlmoituksetListaKuitatut checkedNotifications={checkedNotifications}/>

   </table>
		<a href="index.html">Lisää ilmoituksia...</a>
		<br/><br/>
		  </div>
		</div>
    );
  }
}
