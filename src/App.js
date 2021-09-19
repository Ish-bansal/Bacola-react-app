import React from "react";
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Product";
import Error from "./Error"

const App=()=>{
  return(<>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/product" component={Products}/>
      <Route component={Error}/>

   </Switch>
  </>
  )
}

export default App;
