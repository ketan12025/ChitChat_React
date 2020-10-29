
import React, { Component } from 'react';
import Main from "./component/Main";
import Login from "./component/Login.js"
import { Route,Switch} from "react-router-dom";
import ChatBox from './component/ChatBox'
import { Container,Avatar } from "@material-ui/core";
import UserList from "./component/UserList";
const io = require("socket.io-client")("http://127.0.0.1:5000");




class App extends Component {
	constructor(props){
		super(props)
	   this.state={
			isLogIn : false
		}
	}
	handleLogin=(user)=>{
		console.log(user)
		this.setState({
			isLogIn : true
		})
		io.on('postUser')
	}
	render() {
		return (
			!this.state.isLogIn ? <Login handleLogin={this.handleLogin}/> : <Main/>
		);
	}
}

export default App;


