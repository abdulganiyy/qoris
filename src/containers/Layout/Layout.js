import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Toolbar />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
