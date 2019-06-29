import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from './utils';
import {Redirect} from 'react-router-dom';
class Landing extends Component {
    state = {  }
    render() { 
        const {protect}= this.state;
        if(cookie.getCookie('userId')===""){
            return <Redirect to= '/'/>
        }
        return ( 
            <div>
                <h1>This is my landing page</h1>
                <Link to="/erapage"> Erapage</Link>
            </div>
         );
    }
}
 
export default Landing;