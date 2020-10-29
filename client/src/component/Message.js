import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <>
        {[1, 2, 3, 4, 5, 6,7,8,9,1,2,3,4,5,6,7,8,9,2,,6,7].map((el) => (
            <div className="messageBox"> 
              <p>this is mesage</p>
              <span className="time">12:01 pm</span>
            </div>
         
        ))}
      </>
    );
  }
}

export default Message;
