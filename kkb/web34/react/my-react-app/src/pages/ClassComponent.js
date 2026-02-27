import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    })
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state
    return (
      <div>
        <h3>ClassComponent</h3>
        <div>{date.toLocaleTimeString()}</div>
      </div>
    )
  }
}
