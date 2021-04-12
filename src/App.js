import './App.css';
import Landing from '../src/components/pages/Landing/landing'
import Login from './components/pages/Login/login'
import Register from './components/pages/Register/register'
import CreateProfile from './components/pages/CreateProfile/createProfile'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/createprofile">
            <CreateProfile />
          </Route>


        </Switch>
      </Router>
  
     
  );
}

export default App;
