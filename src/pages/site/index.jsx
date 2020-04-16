import React, { Component } from 'react'

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
        <a href="/detail">去下一个星球</a>
      </div>
    );
  }
}