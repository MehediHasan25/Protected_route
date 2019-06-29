import React, { Component } from 'react';
import cookie from './utils';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
    state = {  }
    
    setCookie(cname, cvalue, minutes) {
        var d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    handleLogout = e =>{
        this.setCookie("userId", "", -1);
        this.props.history.push('/');
    }

    render() { 
        if(cookie.getCookie('userId').value ===""){
            return <Redirect to= '/'/>
        }
        return ( 
            <div>
                <h1> this is logout page</h1>
                <button type="button" onClick={this.handleLogout}>logout</button>
            </div>
         );
    }
}
 
export default Logout;