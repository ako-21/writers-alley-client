import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
import { CSSTransition } from 'react-transition-group'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirmation: ''
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

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/terms'))
      .catch(error => {
        this.setState({ firstname: '', lastname: '', email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { firstname, lastname, email, password, passwordConfirmation } = this.state

    return (
      <CSSTransition in={true} appear={true} timeout={2000}
        classNames="bottom"
      >
        <div className="row-rounded col-5 mx-auto mb-5">
          <p style={{ color: 'white' }}>New here? Register below.</p>
          <h3 style={{ color: 'white', textAlign: 'center' }}>Sign Up</h3>
          <Form onSubmit={this.onSignUp}>
            <Form.Row className="d-flex justify-content-around">
              <Form.Group contolId="firstname">
                <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
                <Form.Control
                  required
                  type="firstname"
                  name="firstname"
                  value={firstname}
                  placeholder="Enter First Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group contolId="lastname">
                <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
                <Form.Control
                  required
                  type="lastname"
                  name="lastname"
                  value={lastname}
                  placeholder="Enter Last Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
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
            <Form.Row className="d-flex justify-content-around">
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
              <Form.Group controlId="passwordConfirmation">
                <Form.Label style={{ color: 'white' }}>Password Confirmation</Form.Label>
                <Form.Control
                  required
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
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

export default withRouter(SignUp)
