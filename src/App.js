import './App.css';
import Landing from '../src/components/pages/Landing/landing'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>

      </Router>
  
     
  );
}

export default App;
