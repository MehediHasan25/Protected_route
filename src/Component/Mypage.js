import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from './utils';
import {Redirect} from 'react-router-dom';

class Mypage extends Component {
    state = {  }
    render() { 
        if(cookie.getCookie('userId')===""){
            return <Redirect to= '/'/>
        }
        return ( 
            <div>
                <h1>This is mypage</h1>
                <Link to="/landing"> Landing</Link>
            </div>
         );
    }
}
 
export default Mypage;