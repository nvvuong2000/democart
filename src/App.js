import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import routes from './Component/routes'
import Menu from './Component/Menu'
class App extends Component {
  showRoute =(routes)=>{
    var result = null;
    if(routes.length>0){
      result = routes.map((route,index)=>{
        return(< Route key={index} path={route.path} exact ={route.exact} component={route.main}/>)
      }
      
      );
    }
    return <Switch > {result}</Switch>
  }
  
 render(){
  // var bg=require('./../public/images/title.png');
  console.log(this.showRoute(routes));
   return(

    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Router>
      <Menu/>
        {this.showRoute(routes)}
        {/* < Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="./Products">
            <ListProducts />
          </Route>
          <Route path="./Contact">
            <Contact />
          </Route>
        </Switch> */}
      </Router>
        
       
  </body>
   );

}}

 
export default App;
