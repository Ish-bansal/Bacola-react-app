import React from "react";
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App=()=>{
  return(<>
   <Switch>
     <Route path="/" component={Home}/>
     <Route path="/about" component={About}/>

   </Switch>
  </>
  )
}

export default App;
