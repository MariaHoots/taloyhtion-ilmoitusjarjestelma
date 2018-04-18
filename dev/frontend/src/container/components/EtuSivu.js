import React from 'react';

export default class EtuSivu extends React.Component {

  componentDidMount() {
    this.props.setPageTittle("Etusivu");
  }

  render() {
    return (
		<div className="card">
		  <div className="card-body">
		    <h3 className="card-title">Tervetuloa {this.props.loggedUser.first_name}</h3>
		    <p className="card-text mb-5">Viimeinen sisäänkirjautuminen {this.props.loggedUser.last_login}</p>

		    <h4>Omat ilmoitukset</h4>
		  <table className="table table-bordered mb-5">
		    <thead>
		      <tr>
            <th>Ilmoitus</th>
            <th>Lähetetty</th>
            <th>Tyyppi</th>
            <th>Kuittaus</th>
		      </tr>
		    </thead>

		    <tbody>
		      <tr>
            <td><a href="index.html">Kissa katolla apua</a></td>
            <td>15.2.2018 09:15</td>
            <td>Muu palaute</td>
            <td><small>Vastaanotettu 15.2.2018 09:20</small></td>
		      </tr>
		    </tbody>
		  </table>

		  {/* <a href="tiedot.html" className="card-link"> */}
		  <a href="/tiedot" className="card-link">
		  <img src="img/tiedot.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Omat tiedot</a>
		  {/* <a href="asetukset.html" className="card-link"> */}
		  <a href="/asetukset" className="card-link">
		  <img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Asetukset</a>
		 {/* <a href="ilmoituslomake.html" className="card-link"> */}
		  <a href="/ilmoituslomake" className="card-link">
		  <img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Tee ilmoitus</a>
		  </div>
		</div>
    );
  }
}
