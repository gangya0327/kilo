import React, { PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  setCount = () => {
    this.setState({ count: 20, obj: { number: 1000 } }) // 浅比较
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }
  render() {
    const { count } = this.state
    console.log('render')
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>count: {count}</button>
      </div>
    )
  }
}
