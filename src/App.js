import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import Arrow from './containers/arrow'
import Dashboard from './containers/dashboard'
import NoRouteMatch from './containers/404'
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          {/* <Header /> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/arrow" component={Arrow} />
            <Route component={NoRouteMatch} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
