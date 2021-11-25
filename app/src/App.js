import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header"><img src="chems.png" alt="" style={{width:"10px"}}/><h3>Dog Gallery</h3></header>  
      <Gallery/>
    </div>
  );
}

export default App;
