import React, { Component } from 'react'
import { Button } from "antd"
import "@/style/antd.scss"
import "@/style/index.scss"
import {login} from "./../../api/login"

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    
  }
  async login() {
    let datas = {
      username: 'zhuweihua',
      password: 'zz111111'
    }
    let res = await login(datas)
    console.log(res)
    if(res.status === 0) {
      this.props.history.push("/detail/2");
    }
  }
  // 
  render () {
    return (
      <div className="outer home">
        <a href="/detail/3">去下一个星球</a>
        <Button type="primary">登录</Button>
        <button onClick={() => this.login()}>
          通过函数登录跳转
        </button>
      </div>
    );
  }
}