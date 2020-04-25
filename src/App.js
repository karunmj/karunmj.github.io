import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Work from './Work.js'; 
import Process from './Process.js'; 
import About from './About.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <Route exact path="/" component={About} />
        <Route path="/process" component={Process} />
        <Route path="/work" component={Work} />
  
        <div className="navigation">
          <div className="navigation-sub">
                                          
            <Link to="/" className="item">About</Link>
            <Link to="/process" className="item">Process</Link>
            <Link to="/work" className="item">Work</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
