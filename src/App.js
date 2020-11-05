import React from 'react';
// import { Navbar } from 'components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home.js'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
