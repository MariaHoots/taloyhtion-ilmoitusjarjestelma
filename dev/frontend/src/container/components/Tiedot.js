import React from 'react';

export default class EtuSivu extends React.Component {

 //  Kommentoidut kohdat lisäyksiä

 //  Vaatii konstruktorin?

/*
	constructor(props) {
		super(props);
		this.state={
			{/* 
			{/* 
		}	
	}	
*/	

/*
	onChange = (event) => {
		if(event.target.name === "passphrase") {
		this.setState({
			passphrase:event.target.value
		});	
	   }
	 }
	 
*/

// JSX-alkaa alapuolella
	
  render() {
    return (
		<div class="card">
		  <div class="card-body">
		  {/* <form onSubmit={this.onSubmit}> */}
		   <form>
			<div class="form-row">
				<div class="form-group col-md-3">
					<label for="formGroupNimi">Nimi</label>
					{/*<input type="text" 
						   name="nimi" 
						   class="form-control" 
						   id="formGroupNimi"
						   placeholder="Nimi"/> 
						   value={this.state.nimi}
						   onChange={this.onChange}/> */}	
				</div>
				<div class="form-group col-md-3">
					<label for="formGroupNimi">Sukunimi</label>
					{/*  <input type="text" 
						   name="sukunimi"
						   class="form-control" 
						   id="formGroupNimi" 
						   placeholder="Sukunimi"/> 
						   value={this.state.sukunimi} 
						   onChange={this.onChange}/> */}
				</div>
			</div>
				<div class="form-groupform-group">
					<label for="formGroupOsoite">Osoite</label>
					 {/*<input type="text"
						   name="osoite"
						   class="form-control"
						   id="formGroupOsoite"
						   placeholder="Osoite"/>
						   value={this.state.osoite} 
						   onChange={this.onChange} */}
			</div>
			<div class="form-row">
				<div class="form-group col-md-2">
					<label for="formGroupPostinumero">Postinumero</label>
					 {/*<input type="text"
						   name="postinumero"
						   class="form-control" 
						   id="formGroupPostinumero" 
						   placeholder="Postinumero"/>						   
						   value={this.state.postinumero}
						   onChange={this.onChange}/>  */}
				</div>
				<div class="form-group col-md-4">
					<label for="formGroupPostinumero">Postitoimipaikka</label>
					{/*<input type="text" 
						   name="postitoimipaikka"	
						   class="form-control" 
						   id="formGroupPostinumero"
						   placeholder="Postitoimipaikka"/> 
						   value={this.state.postitoimipaikka} 
						   onChange={this.onChange}/> */}
				</div>
			</div>	
			<div class="form-group">
					<label for="kayttajaInputEmail1">Sähköposti</label>
					{/* <input type="email"
						   name="email" 
						   class="form-control" 
						   id="kayttajaInputEmail1" aria-describedby="emailHelp" 
						   placeholder="Syötä sähköposti"/>
						   <small id="emailHelp" class="form-text text-muted">Emme tee osoitteellasi mitään laitonta.</small> 
						   value={this.state.email}
						   onChange={this.onChange}/> */}	
			</div>
			<p>Salasanan vaihtaminen</p>
			<div class="form-group">
				<label for="kayttajaInputPassword1">Salasana</label>
				<input type="password" class="form-control" id="kayttajaInputPassword1" placeholder="Salasana"/>
			</div>
			<div class="form-group">
				<label for="InputPassword1">Salasana uudestaan</label>
				<input type="kayttajaInputPassword2" class="form-control" id="kayttajaInputPassword2" placeholder="Salasana uudestaan"/>	
			</div>
	
			<button type="submit" class="btn btn-primary">Tallenna</button>
		  </form>
		  </div>
		</div>
    );
  }
}
