import React, { Component } from 'react'
import { Button } from "antd"
import "./../../style/antd.scss";
import "./../../style/index.scss";

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }
  render () {
    return (
      <div className="outer home">
        <a href="/detail/3">去下一个星球</a>
        <Button type="primary">登录</Button>
        <button onClick={() => this.props.history.push("/detail/2")}>
          通过函数登录跳转
        </button>
      </div>
    );
  }
}