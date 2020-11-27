import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import HomeView from '../HomeView/HomeView'
import UserHome from '../UserHome/UserHome'
import Terms from '../Terms/Terms'
import Howitworks from '../Phases/Howitworks'
import Welcome from '../Welcome/Welcome'
import WritingDetail from '../UserHome/Writings/WritingDetail'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container-fluid p-0" style={{ width: '100vw' }}>
          <Route exact path='/' render={() => (
            <HomeView />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home' render={() => (
            <UserHome user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/terms' render={() => (
            <Terms />
          )} />
          <AuthenticatedRoute user={user} exact path='/howitworks' render={() => (
            <Howitworks />
          )} />
          <AuthenticatedRoute user={user} exact path='/welcome' render={() => (
            <Welcome />
          )} />
          <AuthenticatedRoute user={user} path='/writings/:id' render={() => (
            <WritingDetail msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
