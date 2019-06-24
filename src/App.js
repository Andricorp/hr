import React from 'react';
import logo from './logo.svg';
import './App.css';
import div from '@material-ui/core/Button';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>HR Service</h1>
      </div>
    </BrowserRouter>
    // <Buditton variant="contained" color="primary">
    //   Hello World
    // </Buditton>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
