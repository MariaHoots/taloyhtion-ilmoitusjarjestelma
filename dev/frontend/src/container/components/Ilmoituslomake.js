import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div className="card">
		  <div className="card-body">
	      <h3>Ilmoituslomake</h3>
        <p>Hei {this.props.loggedUser.first_name}, voit jättää tässä uuden ilmoituksen.</p>
        <form>
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
