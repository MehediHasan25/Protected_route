import React, { Component } from 'react';
import cookie from './utils';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = { 
        protect: false
     }

     
   
    handleSubmit = e =>{
      cookie.setCookie("userId", 1234, 120);
       
        this.props.history.push('/mypage');
      
    }




    render() { 
        const {protect}= this.state;
        if(cookie.getCookie('userId') !==""){
            return <Redirect to= '/'/>
        }
               
           
           
        return ( 
            <div>
                <h1>Hello this is login page</h1>
                <button type="button" onClick={this.handleSubmit}>login </button>
            </div>
         );
    }
}
 
export default Login;