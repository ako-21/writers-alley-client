import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { CSSTransition } from 'react-transition-group'

class EmailForm extends React.Component {
  state = {
    credentials: {
      email: ''
    },
    show: false
  }

  componentDidMount () {
    setTimeout(() => { this.setState({ show: !this.state.show }) }, 3200)
  }

  handleInputChange = (event) => {
    const credentialsKey = event.target.name
    const value = event.target.value
    const credentialsCopy = Object.assign({}, this.state.credentials)
    credentialsCopy[credentialsKey] = value
    this.setState({ credentials: credentialsCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ credentials: {
      email: ''
    }
    })
  }
  render () {
    let jsx
    if (this.state.show) {
      jsx =
      <CSSTransition in={true} appear={true} timeout={3000}
        classNames="emailform">
        <React.Fragment>
          <div className="d-flex justify-content-center">
            <Form className="bg-charc home-form col-6 mt-4" onSubmit={this.handleSubmit}>
              <Form.Row className="d-flex justify-content-center">
                <Col>
                  <p className="mt-3" style= {{ color: '#fff' }}>Let&apos;s Get Started:</p>
                </Col>
              </Form.Row>
              <Form.Row className="mb-5 col-12">
                <Col className="col-10">
                  <Form.Control
                    onChange={this.handleInputChange}
                    value={this.state.credentials.email}
                    name="email"
                    type="email"
                    placeholder="enter your email"
                    required={true} />
                </Col>
                <Col className="col-2">
                  <Button variant="outline-white" type="submit">Go &#xbb;</Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </React.Fragment>
      </CSSTransition>
    } else {
      jsx = <div></div>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default EmailForm
