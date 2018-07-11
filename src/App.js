import React, { Component } from 'react';

import Layout from "./containers/Layout"
import './App.css';

class App extends Component {
  

  render() {
    
    return (
      <div className="App">
      <h2> Integrity Checker</h2>
      <a href="REMOTEFILE.zip" className="button">Download Remote File</a>
      <p className="resize1"><strong>Remote File SHA-256: </strong></p>
      <p className="resize2">569230b58cddaf2dd96617b07f4055b5890a56c2732d8c0950c0ced46656bf88</p>
         <Layout/>
      </div>
    );
  }
}

export default App;
