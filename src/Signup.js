import React, { Component } from 'react';
import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';
import signup from './signup.css'
import firebase, { auth, provider } from './firebase.js';
class Signup extends Component{
	constructor(props){
		super(props);	
	this.state={
		email:'',
		password:'',
	}
}
	render(){
			return(
				<div className="inner">
					<label for="email">Enter Email ID:</label>
					<input className="email" placeholder="Enter Email "type="input" onChange={(event)=>this.setState({email:event.target.value})} value={this.state.email}/>
					<label for="password">Enter Password:</label>
					<input className="password" placeholder="Enter Password "type="input" onChange={(event)=>this.setState({password:event.target.value})} value={this.state.password}/>
					<button type="button" className="btn btn-warning btn-lg" onClick={this.handleEmailSignup}>Submit Data</button>
				</div>
				);
	}
	handleEmailSignup = ()=>{
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
 	    alert("Signup Unsuccessfull!");
  		});
		alert("Signup Successfull!");
	}
}
 


export default Signup;