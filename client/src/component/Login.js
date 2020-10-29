import React, { Component } from "react";
import { Container,TextField,Button} from "@material-ui/core";
import axios from 'axios'
const io = require("socket.io-client")("http://127.0.0.1:5000");

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }
  }
  handleInput=(e)=>{
   this.setState({
     [e.target.name] : e.target.value
   })
  }

  handleSignIn=()=>{
   
   let newUser = {
     username : this.state.username,
     password: this.state.password
   }
   io.emit('login' ,{ newUser:newUser })
  this.props.handleLogin(newUser);
  }

  render() {
    return (
      <Container maxWidth='xxl' style={{ height: "100vh" }} className="herologin">
        <div className="loginlayer">
          <div className="loginmain">
        
      <Container>
      <TextField fullWidth id="username" name='username' value={this.state.username} label="Username" variant="outlined" onChange ={this.handleInput} style={{marginTop:"20%"}}/>
      <TextField fullWidth id="pasword" name='password' value={this.state.password} label="password" onChange ={this.handleInput} variant="outlined" style={{marginTop:"5%"}}/>
      <Button onClick={()=>this.handleSignIn()} variant="contained" color="primary" style={{marginTop:'1rem'}}>
  Primary
</Button>
</Container>
        
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
