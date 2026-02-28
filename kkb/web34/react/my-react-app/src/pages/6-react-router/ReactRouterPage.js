import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to="/">首页</Link> | &nbsp;
          <Link to="/user">用户</Link>

          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/user' component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div >
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    )
  }
}

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h3>NotFoundPage</h3>
      </div>
    )
  }
}
