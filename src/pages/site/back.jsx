import React, { Component } from "react";

export default class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      console.log(this.props.match.params);
  }
  render() {
    return (
      <div className="outer home">
        <a href="/">返回地球</a>
      </div>
    );
  }
}
