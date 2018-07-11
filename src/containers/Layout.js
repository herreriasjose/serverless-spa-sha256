import React, { Component } from "react";

import Box from "react-drag-drop-info";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: [],
      droppable: true,
      icon: "Droppable",
      text: "Check downloaded file here"
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(obj) {
    if (obj.hash256) {
      const hash = this.state.hash;
      hash.push(obj.hash256);
      this.setState({ hash: hash });
    }
    if (obj.busy === false) {
      if (
        this.state.hash[0] ===
        "569230b58cddaf2dd96617b07f4055b5890a56c2732d8c0950c0ced46656bf88"
      ) {
        this.setState({ icon: "Right" });
      } else {
        this.setState({ icon: "Wrong" });
      }
    } else {
      this.setState({ icon: "Busy", text: "", hash: [] });
    }
  }

  render() {
    let hash = null; // <- AQUÍ

    if (this.state.hash[0]) {
      // <- AQUÍ
      hash = (
        <span>
          <p className="resize1">
            <strong>Locale File SHA-256: </strong>
          </p>
          <p className="resize2">
            {this.state.hash[0]}
          </p>
        </span>
      );
    }

    return (
      <div className="Layout">
        <div>
          <Box
            handleDrop={this.handleDrop}
            boxId="1"
            droppable={this.state.droppable}
          >
            <div className={this.state.icon}><p className="resize1">{this.state.text}</p></div>
          </Box>
        </div>
        {hash}
      </div>
    );
  }
}

export default Layout;
