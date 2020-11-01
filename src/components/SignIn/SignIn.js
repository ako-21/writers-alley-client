import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CSSTransition } from 'react-transition-group'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    document.getElementById('body').className = 'background-image'
  }

  componentWillUnmount () {
    document.getElementById('body').className = ''
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      // .then((res) => console.log(res.data.user))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/home'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <CSSTransition in={true} appear={true} timeout={2000}
        classNames="bottom"
      >
        <div className="row-rounded col-5 mx-auto">
          <p style={{ color: 'white' }}>Welcome Back!</p>
          <h3 style={{ color: 'white', textAlign: 'center' }}>Sign In</h3>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="email">
              <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              style={{ float: 'right' }}
              variant="outline-white"
              type="submit"
            >
                Submit
            </Button>
          </Form>
        </div>
      </CSSTransition>
    )
  }
}

export default withRouter(SignIn)
