import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from '../Components/Header';
import Pages from '../Pages'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
