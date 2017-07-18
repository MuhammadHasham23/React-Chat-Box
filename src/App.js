import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import HandleEmail from './HandleEmail'
import HandleGoogle from './HandleGoogle'


import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';

class App extends Component {
 render(){
  return(
      <div>
        <Route exact path= "/" component={Home}/>
        <Route exact={true} path= "/login" component={Login}/>
        <Route path= "/signup" component={Signup}/>
        <Route path="/login/emailandpassword/" component={HandleEmail}/>
        <Route path="/login/googleauth/:user" component={HandleGoogle}/>
        <Route path="/logout" component={Login}/>
      </div>
    );
 }

}
class Home extends Component{
  render(){
    return(  

      <div className="container">
        
        <h1 className="text-center">Welcome To Chat Box!</h1>
        <div className="btns">
          <button id="login"className="btn btn-warning btn-lg"onClick={this.handleLogin}><p>Login</p></button>
          <button id="signup"className="btn btn-warning btn-lg"onClick={this.handleSignUp}><p>Sign Up</p></button>
        </div>
      </div>
      );
  }
handleLogin = ()=>{
  this.props.history.push('/login');
}
handleSignUp = ()=>{
  this.props.history.push('/signup');
}

}

export default withRouter(App);
