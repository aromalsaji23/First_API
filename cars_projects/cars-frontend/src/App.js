import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cars from './Cars';
import CarDetails from './CarDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cars" component={Cars} />
          <Route path="/car-details" component={CarDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
