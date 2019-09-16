import React, {Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'
import './App.css'

//Redux
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'))
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path="/" component={Landing}></Route>
          <section className="container">
            <Alert></Alert>
            <Switch>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
