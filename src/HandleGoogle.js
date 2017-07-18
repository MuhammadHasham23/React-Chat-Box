import React, { Component } from 'react';
import {BrowserRouter as Router ,Link,Route,Switch,withRouter} from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';
import handlegoogle from './handlegoogle.css'
class HandleGoogle extends Component{
	constructor(props){
		super(props);
		this.state={
			messages:[],
			msg:'',
			user:null,
			flag:false
		};
	}
 componentDidMount() {
   const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
      messages:items[item]
      });
    }
    this.setState({
      messages: newState,
      flag:true
    });
  });
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
      console.log(user);
    }
    }); 
}
	render(){
		var style = {
      fontSize:'104px',
      marginTop:'20%',
      color:'red'
    		};
		let items = this.state.messages.map((item,i)=>{
			   
				return(
					<div className="li-box">
						<img src={this.state.user.photoURL}/>
						<li key={i} className="right">{item.messages.messages}</li>
					</div>);
			
		});
		return(
		<div className="container">
			<div className="inner-box">
			 {this.state.flag === false ? <i className="fa fa-spinner fa-spin" style={style}></i> : <div className="outer"><ul>{items}</ul></div>}
			</div>
			<div className="text-box">
				<div class="form-group">
 				 	 <label for="comment">Enter Message:</label>
  					 <textarea  className="form-control"onChange={(e)=>this.setState({msg:e.target.value})} value={this.state.msg} rows="3" id="comment"></textarea>
					 <button id="submit" type="button" className="btn btn-warning btn-lg" onClick={this.handleClick}>Submit</button>
					<button id="logout"type="button" className="btn btn-warning btn-lg" onClick={this.logOut}>Logout</button>
				</div>
				
			</div>
		</div>
		);
	}
	handleClick = ()=>{
		
		let add;
		let str = this.props.match.url;
		let user = str.replace('/login/googleauth/','');
		if (user.includes('@')){
			add = '@'+user.substring(0, user.indexOf("@")) +':'+ this.state.msg;
		}
		else
		add = user +':'+this.state.msg;
		
		const itemsRef = firebase.database().ref('items');
  		const item = {
    		messages: add,
    		}
  		itemsRef.push(item);
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  		audio.play();
		this.setState({msg:''});
	}
	logOut = ()=>{
		 auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
    firebase.auth().signOut().then(function() {
  			// Sign-out successful.
		}).catch(function(error) {
  			// An error happened.
		});
    this.props.history.push('/logout');
	}
}


export default withRouter(HandleGoogle);