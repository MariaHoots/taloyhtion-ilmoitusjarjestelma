import React from 'react';

import IsannoitsijaIlmoituksetLista from './IsannoitsijaIlmoituksetLista';
import IsannoitsijaIlmoituksetListaKuitatut from './IsannoitsijaIlmoituksetListaKuitatut';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
				<h3>Uudet ilmoitukset</h3>
		<table class="table table-bordered">
		  <thead>
		    <tr>
         <th>Ilmoitus</th>
         <th colspan="2">Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Toiminnot</th>
		    </tr>
		  </thead>
		  <tbody>
        <tr>
          <td></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td>
        <select class="form-control" id="ilmoitustyyppi">
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
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td></td>
        </tr>
		    
			
			<IsannoitsijaIlmoituksetLista/>
			
			
			
 
		  </tbody>
		</table>

   <h3>Kuitatut ilmoitukset</h3>
   <table class="table table-bordered" id="oldElements">
     <thead class="thead-light">
       <tr>
         <th>Ilmoitus</th>
         <th>Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Kuittaus</th>
		    </tr>
		  </thead>
		  <tbody>
       <tr>
         <td></td>
         <td></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeTyyppi" placeholder="Ilmoitus" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td></td>
       </tr>
		   
		   
		   
		   <IsannoitsijaIlmoituksetListaKuitatut/>
		   
		   
		  </tbody>
   </table>
		<a href="index.html">Lisää ilmoituksia...</a>
		<br/><br/>
		  </div>
		</div>
    );
  }
}
