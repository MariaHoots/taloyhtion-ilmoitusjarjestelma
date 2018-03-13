import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
		   
	<h3>Ilmoituslomake</h3>

<form>

 <div class="form-row">
    <div class="form-group col-md-6">
      <label for="taloyhtio">Kirjoita otsikko</label>
      <input type="text" class="form-control" id="otsikko" placeholder="kirjoita otsikko"/>
    </div>
</div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="taloyhtio">Taloyhtiö</label>
      <input type="text" class="form-control" id="taloyhtio" placeholder="valitse talo"/>
    </div>

    <div class="form-group col-md-6">
      <label for="huoneisto">Huoneisto</label>
      <input type="text" class="form-control" id="huoneisto" placeholder="valitse huoneisto"/>
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="etunimi">Etunimi</label>
      <input type="text" class="form-control" id="etunimi" placeholder=""/>
    </div>

    <div class="form-group col-md-6">
      <label for="sukunimi">Sukunimi</label>
      <input type="text" class="form-control" id="sukunimi" placeholder=""/>
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="osoite">Osoite</label>
      <input type="text" class="form-control" id="osoite" placeholder=""/>
    </div>

    <div class="form-group col-md-4">
      <label for="postinumero">Postinumero</label>
      <input type="text" class="form-control" id="postinumero" placeholder=""/>
    </div>

    <div class="form-group col-md-2">
      <label for="postitoimipaikka">Postitoimipaikka</label>
      <input type="text" class="form-control" id="postitoimipaikka" placeholder=""/>
    </div>

    <div class="form-group col-md-3">
      <label for="puhelin">Puhelin</label>
      <input type="text" class="form-control" id="puhelin" placeholder=""/>
    </div>

    <div class="form-group col-md-3">
      <label for="sahkoposti">Sähköposti</label>
      <input type="text" class="form-control" id="sahkoposti" placeholder=""/>
    </div>

    <div class="form-group col-md-3">
      <div class="form-group">
        <label for="ilmoitustyyppi">Valitse ilmoitustyyppi</label>
        <select class="form-control" id="ilmoitustyyppi">
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

  <div class="form-group">
    <label for="kuvaus">Ilmoituksen tarkempi kuvaus</label>
    <textarea class="form-control" id="kuvaus" rows="5"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Lähetä ilmoitus</button>
  <br/><br/>
</form>
		  </div>
		</div>
    );
  }
}
