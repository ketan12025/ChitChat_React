import React, { Component } from 'react';
import {TextField,Fab} from '@material-ui/core'

import {Send} from '@material-ui/icons';
import Message from './Message'


class ChatBox extends Component {
    render() {
        return (
            <>
               <div className="messageContainer">
                 <Message/>
               </div>
                    
               <div style={{position:'absolute',bottom:0,width:'100%',backgroundColor:'rgb(213, 236, 236'}}>
               <TextField id="outlined-basic" placeholder="Message" variant="outlined" style={{width:'70%', padding:'5px',borderRadius:20,color:'white'}} />
               <Fab variant="extended" style={{backgroundColor:'#008c76FF',color:"rgb(213, 236, 236)" , float:"right" , marginRight:"10px",width:'25%',marginTop:'8px'}}>
                  <Send/>
                 Send
                </Fab>
               </div>
           </>
        );
    }
}

export default ChatBox;