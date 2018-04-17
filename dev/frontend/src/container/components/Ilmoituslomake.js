import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div className="card">
		  <div className="card-body">
	      <h3>Ilmoituslomake</h3>
        <p>Ole hyvä ja täytät uuden ilmoituksen tiedot alempana.</p>
        <form>
          <h4>Esitäytet tiedot</h4>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="etunimi">Etunimi</label>
              <input type="text" className="form-control" id="etunimi" value={this.props.loggedUser.first_name} readOnly/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="sukunimi">Sukunimi</label>
              <input type="text" className="form-control" id="sukunimi" value={this.props.loggedUser.last_name} readOnly/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="taloyhtio">Taloyhtiö</label>
              <input type="text" className="form-control" id="taloyhtio" placeholder=""/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="huoneisto">Huoneisto</label>
              <input type="text" className="form-control" id="huoneisto" placeholder=""/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="osoite">Osoite</label>
              <input type="text" className="form-control" id="osoite" value={this.props.loggedUser.billing_address} readOnly/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="postinumero">Postinumero</label>
              <input type="text" className="form-control" id="postinumero" value={this.props.loggedUser.zip} readOnly/>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="postitoimipaikka">Postitoimipaikka</label>
              <input type="text" className="form-control" id="postitoimipaikka" value={this.props.loggedUser.city} readOnly/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="puhelin">Puhelin</label>
              <input type="text" className="form-control" id="puhelin" value={this.props.loggedUser.phone} readOnly/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="sahkoposti">Sähköposti</label>
              <input type="text" className="form-control" id="sahkoposti" value={this.props.loggedUser.email} readOnly/>
            </div>
          </div>
          <h4>Ilmoituksen tiedot</h4>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="taloyhtio">Ilmoituksen otsikko</label>
              <input type="text" className="form-control" id="otsikko" placeholder="kirjoita otsikko"/>
            </div>
            <div className="form-group col-md-6">
              <div className="form-group">
                <label htmlFor="ilmoitustyyppi">Valitse ilmoitustyyppi</label>
                <select className="form-control" id="ilmoitustyyppi">
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
                </select>
              </div>
           </div>
          </div>

          <div className="form-group">
            <label htmlFor="kuvaus">Ilmoituksen tarkempi kuvaus</label>
            <textarea className="form-control" id="kuvaus" rows="5"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Lähetä ilmoitus</button>
          <br/><br/>
        </form>
		  </div>
		</div>
    );
  }
}
