import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Landing from './Component/Landing';
import Mypage from './Component/Mypage';
import Erapage from './Component/Erapage';
import Logout from './Component/Logout';
import PrivateRoute from './Component/PrivateRoute';
import notfound from './Component/notfound';

class App extends Component {
  state = {  }
  render() { 
    return (
      <Router>
      <div className="App">
      <div className= "container">
      <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/notfound" component={notfound}/>
           <PrivateRoute exact path="/landing" component={Landing}/>]
           <PrivateRoute exact path="/mypage" component={Mypage}/>
           <PrivateRoute exact path="/erapage" component={Erapage}/>
           <PrivateRoute exact path="/logout" component={Logout}/>
           <Redirect to="/notfound"/>
           </Switch>
        </div>
      </div>
      </Router>
      );
  }
}
 
export default App;
