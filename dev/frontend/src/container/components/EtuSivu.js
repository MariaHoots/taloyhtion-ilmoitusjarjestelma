import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
		    <h3 class="card-title">Tervetuloa Maija</h3>
		    <p class="card-text mb-5">Viimeinen sisäänkirjautuminen 12.2.2018 09:23</p>

		    <h4>Omat ilmoitukset</h4>
		  <table class="table table-bordered mb-5">
		    <thead>
		      <tr>
            <th>Ilmoitus</th>
            <th>Päivämäärä</th>
            <th>Ilmoitus</th>
            <th>Tyyppi</th>
            <th>Kuittaus</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
            <td onclick="datahaku.naytaIlmoituksenTiedotAsukas(1);"><a href="index.html">Kissa katolla apua</a></td>
            <td>15.2.2018 09:15</td>
            <td>Maija Meikäläinen</td>
            <td>Muu palaute</td>
            <td><small>Vastaanotettu 15.2.2018 09:20</small></td>
		      </tr>
		    </tbody>
		  </table>

		  <a href="tiedot.html" class="card-link">
		  <img src="img/tiedot.svg" class="img-fluid" alt="[H]" height="20" width="20"/> Omat tiedot</a>
		  <a href="asetukset.html" class="card-link">
		  <img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/> Asetukset</a>
		  <a href="ilmoituslomake.html" class="card-link">
		  <img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/> Tee ilmoitus</a>
		  </div>
		</div>
    );
  }
}
