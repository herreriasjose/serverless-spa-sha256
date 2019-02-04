import React, { Component } from "react";

import Layout from "./containers/Layout";
import Footer from "./Footer";
import Info from "./Info";

import "./App.css";
import "./bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App col-md-12">
        <h2 className="text-primary p-2"> Integrity Checker Demo</h2>
        <Info/>
        <br/>
        
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      <strong>Step 1:</strong> download the test file
                    </li>
                  </ol>
                </nav>
                <p className="resize1">
          <strong>Original Remote File SHA-256: </strong>
        </p>
        <p className="resize2">
          569230b58cddaf2dd96617b07f4055b5890a56c2732d8c0950c0ced46656bf88
        </p>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <a
                  href="REMOTEFILE.ZIP"
                  className="btn btn-outline-primary w-75"
                >
                  Download
                </a>
                
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
<br/>
<br/>
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                     <strong>Step 2:</strong> drag the downloaded file into the box
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>

        <Layout />
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                     <strong>Step 3:</strong> try dragging in a different file
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span><br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
