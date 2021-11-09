import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import Arrow from './containers/arrow'
import Login from './containers/login'
import Dashboard from './containers/dashboard'
import NoRouteMatch from './containers/404'
class App extends Component {
  render() {
    return (
      <>
        <HashRouter basename="/">
          <div className="App">
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/arrow" component={Arrow} />
              <Route component={NoRouteMatch} />
            </Switch>

            <Footer />
          </div>
        </HashRouter>
        <ToastContainer
          position="top-center"
          transition={Flip}
          autoClose={3000}
          hideProgressBar
          closeButton={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
      </>
    )
  }
}

export default hot(module)(App)
