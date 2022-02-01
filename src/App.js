import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBarC from "./Components/NavBarC"
import NewsCardCont from './Components/NewsCardCont';
import Subscription from './Components/Subscription';


function App() {
  return (
    <>
    <h1>hi </h1>
    <Router>
      <NavBarC/>
      <Switch>
        {/* <Route exact path="/"><NewsCardCont category="general"/></Route>
        <Route exact path="/business"><NewsCardCont category="business"/></Route>
        <Route exact path="/entertainment"><NewsCardCont category="entertainment"/></Route>
        <Route exact path="/sports"><NewsCardCont category="sports"/></Route>
        <Route exact path="/scienceandtechnology"><NewsCardCont category="science"/></Route>
        <Route exact path="/health"><NewsCardCont category="health"/></Route>
        <Route exact path="/subscription"><Subscription /></Route> */}
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
