import React, { Component } from 'react';
import login from './login.css'
import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';
import HandleEmail from './HandleEmail'
import firebase, { auth, provider } from './firebase.js';
class Login extends Component{
	constructor(props){
		super(props);
	
	this.state={
		user:null
	}
}
	render(){
		
		return(
		<div className="container">
			<div className="inner">
				<h1 className="login-text">Login</h1>
					<div className="btns">
						<button id="email" onClick={this.handleEmail} className="btn btn-warning btn-lg">Email/Password</button>
							
						<button id="google" onClick={this.handleGoogle} className="btn btn-warning btn-lg">Google Accounts</button>
					</div>
			</div>
		</div>
	);
	}
	handleEmail = ()=>{
		this.props.history.push("/login/emailandpassword");
	}
	handleGoogle = ()=>{
  			auth.signInWithPopup(provider) 
    		.then((result) => {
      		const user = result.user;
      		this.setState({
        		user
      		});
      		console.log(this.state.user.displayName);
      		if (this.state.user) this.props.history.push("/login/googleauth/"+this.state.user.displayName);
      		else console.log("invalid login details");
    	});
	}
}



export default withRouter(Login);