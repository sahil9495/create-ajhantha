
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Fronet from './Fronet';
import Events from './Events';
import About from './About';
import Testinomial from './Testinomial';
import Clicks from './Clicks';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Fronet></Fronet>
     <Events></Events>
     <About></About>
     <Testinomial></Testinomial>
     <Clicks></Clicks>
    <Contact></Contact>
    </div>
  );
}
export default App;
