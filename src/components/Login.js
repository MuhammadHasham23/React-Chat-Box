import React, { Component } from 'react';
import login from './login.css'
import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';
import HandleEmail from './HandleEmail'
//import HandleGoogle from './HandleGoogle'
//import firebase, { auth, provider } from './firebase.js';

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
				<h2 className="login-text">Login</h2>
					<div className="btns">
						<button id="email" onClick={this.handleEmail} className="btn btn-primary btn-lg">Email/Password</button>
							<h2>OR</h2>
						
					</div>
			</div>
		</div>
	);
	}
	handleEmail = ()=>{
		this.props.history.push("/login/emailandpassword");
	}

	
}



export default withRouter(Login);