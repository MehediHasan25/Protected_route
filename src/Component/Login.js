import React, { Component } from 'react';
import cookie from './utils';
import {Redirect} from 'react-router-dom';
import cookies from './utils';
class Login extends Component {
    state = { 
        protect: false
     }

    //  componentWillUpdate(){
    // //     if(cookie.getCookie('userId').value ===""){
    // //         return <Redirect to= '/'/>
    // //  }
    // if(cookie.getCookie('userId') !==""){
       
    // }
    //  console.log("Mehedi");
    //  }
   
    handleSubmit = e =>{
    //    cookie.setCookie("userId", 1234, 120);
       this.setState({protect:true});
    // console.log("handle");
        this.props.history.push('/mypage');
        cookie.setCookie("userId", 1234, 120);
    }




    render() { 
        const {protect}= this.state;
        // if(cookie.getCookie('userId').value ==="1234"){
        //     return <Redirect to= '/'/>
        // }
            // if(protect === true){
            //     return <Redirect to= '/'/> 
            // }     
           
           
        return ( 
            <div>
                <h1>Hello this is login page</h1>
                <button type="button" onClick={this.handleSubmit}>login </button>
            </div>
         );
    }
}
 
export default Login;