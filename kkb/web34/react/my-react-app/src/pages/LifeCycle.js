import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
    console.log('constructor')
  }
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)
    const { count } = state
    return count > 5 ? { count: 0 } : null
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return { msg: 'snapshot message' }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot, snapshot)
  }
  setCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    console.log('render')
    const { count } = this.state

    return (
      <div>
        <h3>LifeCycle</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>修改 count</button>
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log('Child componentWillReceiveProps', nextProps)
  // }
  componentWillUnmount() {
    console.log('Child componentWillUnmount')
  }
  render() {
    console.log('Child render')
    return (
      <div>
        <h4>Child Component</h4>
      </div>
    )
  }
}