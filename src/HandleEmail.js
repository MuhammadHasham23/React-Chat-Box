import React, { Component } from 'react';
import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';
import email from './email.css'
import firebase, { auth, provider } from './firebase.js';
class HandleEmail extends Component{
	constructor(props){
		super(props);

		this.state={
			email:'',
			password:'',
			flag:true
		}
	}
	render(){
		return(
			<div className="inner">
				<label for="email">Enter Email ID:</label>
				<input className="email" type="email" placeholder="Enter Email "type="input" onChange={(event)=>this.setState({email:event.target.value})} value={this.state.email}/>
				<label for="password">Enter Password:</label>
				<input id="password" type="password"className="password" placeholder="Enter Password "type="input" onChange={(event)=>this.setState({password:event.target.value})} value={this.state.password}/>
				<button type="button" className="btn btn-warning btn-lg" onClick={this.signIn}>Submit Data</button>
			</div>

		);
	}

signIn = ()=>{
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert('Invalid Details Entered');
  // ...
});
  if (this.state.flag) this.props.history.push("/login/googleauth/"+this.state.email);
  else alert("Wrong email or password entered");
}
}
export default HandleEmail;