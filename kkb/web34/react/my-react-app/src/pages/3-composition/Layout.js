import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default class Layout extends Component {
  componentDidMount() {
    const { title = '页面' } = this.props
    document.title = title
  }
  render() {
    console.log(this.props)
    const { children, showTopBar, showBottomBar } = this.props
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.html}
        <button onClick={children.btnClick}> 点击按钮 </button>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}
