import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
		super(props);
		this.state={
			uname:"",
			passphrase:""
		}
  }
  
  onChange = (event) => {
		if(event.target.name === "uname") {
			this.setState({
				uname:event.target.value
			});
		}
		if(event.target.name === "passphrase") {
			this.setState({
				passphrase:event.target.value
			});
		}		
	}
	
	onSubmit = (event) => {
		console.log("onsubmit")
		let user = {
			"uname":this.state.uname,
			"passphrase":this.state.passphrase			
		}
		if(event.target.name === "login") {
			this.props.onLogin(user);
		} 
		event.preventDefault();
	}




  render() {
    return (
			<div className="card">
		     <div className="card-body">
            <div class="row">
	            <div class="col">
	            </div>
	          <div class="col">
		        <form>
		          <div class="form-group">
		            <label for="uname">Sähköposti</label>
                <input type="email"
                        name="uname"
                        value={this.state.uname}
					              onChange={this.onChange}
                        class="form-control"
                        id="uname"
                        aria-describedby="emailHelp"
                        placeholder="Kirjoita sähköpostiosoitteesi"/>
		          </div>
		          <div class="form-group">
		            <label for="passphrase">Salasana</label>
                <input type="password"
                        name="passphrase"
                        value={this.state.passphrase}
                        onChange={this.onChange}
                        class="form-control"
                        id="passphrase"
                        placeholder="Salasana"/>
		          </div>
              <input type="button"
					            name="login"
					            value="Kirjaudu"
					            onClick={this.onSubmit}
                      class="btn btn-primary"/>
		        </form>
	        </div>
	        <div class="col">
	        </div>
	      </div>
      </div>
    </div> 
    );
  }
}
