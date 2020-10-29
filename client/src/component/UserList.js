import React, { Component } from 'react';
import {Card} from '@material-ui/core'
import { BorderBottom } from '@material-ui/icons';
import {Link} from 'react-router-dom'

class UserList extends Component {
    render() {
        return (
              [1,2,3,4,5,6,7,8,9,10,11,12,13].map(data=>(
                  <Link to='/chatbox'>
                     <Card style={{background:'rgb(213, 236, 236)',color:'#008c76FF', borderBottom:'0.1px solid lightGray'}}>
                <div className="name" style={{float:'left',paddingLeft:'8%'}} >
                    <h4 style={{fontWeight:500}}>Ketan Agrawal</h4>
                </div>
                <div className="lasttime" style={{float:'right',paddingRight:'8%'}}>
                <h4 style={{fontWeight:500}}>1:50 pm</h4>
                </div>
            </Card> 
                  </Link>
               
              ))
           
        );
    }
}

export default UserList;