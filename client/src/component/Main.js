import React, { Component } from "react";

import { Container,Avatar } from "@material-ui/core";
import UserList from "./UserList";
import ChatBox from "./ChatBox"
import {Route} from 'react-router-dom'

const io = require("socket.io-client")("http://127.0.0.1:5000");
io.on("rply", (socket) => {
 console.log(io);
});
io.emit("message", "msg");
class Main extends Component {
  render() {
    return (
      <Container
      maxWidth="xxl"
      style={{ height: "100vh", paddingLeft: 0, paddingRight: 0 }}
    >
      <div className="leftmain">
        <header >
            <Avatar alt="Remy Sharp" src="./../data/image/backgroundLogin.jpg" />
        </header>
        <div className="list">
          <UserList />
        </div>
      </div>

      <div className="rightmain">
        <header>
          <h3>Ketan Agrawal</h3>
        </header>
        <div className="chatbox">
         <Route path="/chatbox" component={ChatBox}/>
      
        </div>
      </div>
    </Container>
    );
  }
}

export default Main;
