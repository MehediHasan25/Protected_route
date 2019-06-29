import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from './utils';
import {Redirect} from 'react-router-dom';

class Erapage extends Component {
    state = {  }
    render() { 
        if(cookie.getCookie('userId')===""){
            return <Redirect to= '/'/>
        }
        return ( 
            <div>
                <h1>THIS IS ERA PAGE</h1>
                <Link to="/logout"> Logout</Link>
            </div>
         );
    }
}
 
export default Erapage;