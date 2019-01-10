import React, { Component } from "react";

import Layout from "./containers/Layout";

import "./App.css";
import "./bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="text-primary p-2"> Integrity Checker Demo</h2>
        <br/>
        <span>
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                      Step 1: download the remote file
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
                  className="btn btn-primary btn-lg w-75 resize1"
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
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                      Step 2: drag it into the box
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
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                      Step 3 (optional): check with a different file
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default App;
