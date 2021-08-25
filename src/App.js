import React from "react" ;
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" ;
import Header from "./Header"
import Home from "./Home"
import Addition from "./Addition"
import Subtraction from "./Subtraction"
import Multiplication from "./Multiplication"
function App() {
  return (
<Router>
    <div className="App">
        <Switch>
          
          <Route exact path="/">     
            <Header></Header>
            <Home></Home>
          </Route>

          <Route path="/Addition">
            <Header></Header>
            <Addition></Addition>
          </Route>
          <Route path="/Subtraction">
            <Header></Header>
            <Subtraction></Subtraction>
          </Route>
          <Route path="/Multiplication">
            <Header></Header>
            <Multiplication></Multiplication>
          </Route>
          
          <Route path="/:random">
               <h1>wrong address</h1>
          </Route>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App;
