import React from "react";

export default class MainLayout extends React.Component {
  render() {
    return <div className="main-layout">{this.props.children}</div>;
  }
}
