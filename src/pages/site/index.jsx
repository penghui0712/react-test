import React, { Component } from 'react'
import { Button } from "antd"
import "@/style/antd.scss"
import "@/style/index.scss"
import {login} from "./../../api/login"
import { Line } from "@antv/g2plot";

export default class Index extends Component {

  
  constructor (props) {
    super(props)
    this.state = {
        params: [],
        data: [{ year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 }
        ],
        width: 600,   // 固定宽度    当自适应宽度开启，此功能失效 
        height: 400
    }
  }
  componentDidMount () {
    const linePlot = new Line(document.getElementById('container'), {
      title: {
        visible: true,
        text: '折线图',
      },
      description: {
        visible: true,
        text: '用平滑的曲线代替折线。',
      },
      data: this.state.data,
      xField: 'year',
      yField: 'value',
    })
    linePlot.render()
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
        <button onClick={() => this.login()}>通过函数登录跳转</button>
        <div className="big">糖尿病视网膜改变阴性</div>
        <div className="small">眼底未见糖尿病视网膜改变特征病理改变；</div>
        <div id="container">
          <linePlot
            data={this.state.data} //设置数据
            width={this.state.width} //设置forceFit=true 时 失效
            height={this.state.height} //设置高度
          />
        </div>
      </div>
    );
  }
}