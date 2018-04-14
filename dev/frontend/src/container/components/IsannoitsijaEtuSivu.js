import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div className="card">
		  <div className="card-body">
		    <h3 className="card-title">Tervetuloa Ismo</h3>
		    <p className="card-text mb-5">Viimeinen sisäänkirjautuminen 12.2.2018 09:23</p>

		    <h4>Uusimmat ilmoitukset</h4>
		  <table className="table table-bordered mb-5">
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
            <td ><a href="index.html">Kissa katolla apua</a></td>
            <td>21.10.2015 07:28</td>
            <td>Maija Meikäläinen</td>
            <td>Muu palaute</td>
            <td><a href="index.html"><img src="img/vastaanotettu.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		      </tr>
		    </tbody>
		  </table>

		  <a href="isannoitsija-ilmoitukset.html" className="card-link">
		  <img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Kaikki ilmoitukset</a>
		  <a href="isannoitsija-tiedot.html" className="card-link">
		  <img src="img/tiedot.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Omat tiedot</a>
		  <a href="asetukset.html" className="card-link">
		  <img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Asetukset</a>
		  
		  </div>
		</div>
    );
  }
}
