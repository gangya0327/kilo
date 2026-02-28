import React, { Component } from 'react'
import Layout from './Layout'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={true} showBottomBar={false} title="首页">
          {/* <h3>HomePage</h3> */}
          {
            {
              content: '这是首页的内容',
              html: (
                <p style={{ color: 'red' }}>首页内容区域</p>
              ),
              btnClick: () => console.log('点击了 button')
            }
          }
        </Layout>
      </div>
    )
  }
}
