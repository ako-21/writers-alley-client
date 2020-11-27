import React from 'react'
// import UserHome from './../UserHome/UserHome'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BsArrowRight } from 'react-icons/bs'
// import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import AddToChecklist from './AddToChecklist'

class Checklist extends React.Component {
  state = {
    isStarted: false,
    isComplete: false,
    group: 'first'
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/writings/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      }
    })
      .then(res => this.setState({
        isStarted: res.data.writing.checklist.isStarted,
        isComplete: res.data.writing.checklist.isComplete
      }))
      .catch(error => {
      // handle error
        console.log(error)
      })
  }

  handleSubmitOne = (event) => {
    event.preventDefault()
    this.setState({
      group: 'second'
    })
  }

  handleSubmitTwo = (event) => {
    event.preventDefault()
    this.setState({
      group: 'third'
    })
  }

  createChecklist = (event) => {
    event.preventDefault()
    this.setState({
      isStarted: true
    })
    axios({
      method: 'POST',
      url: apiUrl + '/checklists',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        checklist: {
          isStarted: this.state.isStarted,
          isComplete: this.state.isComplete,
          writingId: this.props.match.params.id
        }
      }
    })
  }
  getChecklist = (event) => {
    axios({
      method: 'GET',
      url: apiUrl + '/writings',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      }
    })
      .then(res => console.log(res.data))
  }
  deleteChecklist = (event) => {
    axios({
      method: 'DELETE',
      url: apiUrl + '/checklists/' + '5fb9c830bf40321ddeb41086',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        writingId: this.props.match.params.id
      }
    })
      .then(this.setState({ isStarted: false }))
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Phase 1: Checklist</h2>
    const desc = <p style= {{ teaxtAlign: 'center' }}>You can create a checklist by entering the key requirements from your assignment sheet into the appropriate fields. Disregard any fields that are unrelated, and feel free to add any neccessary fields that aren&apos;t currently included.</p>
    let jsx
    if (this.state.isStarted === false) {
      jsx = (
        <React.Fragment>
          <div className="mt-5">{heading}</div>
          <div className="mt-2">{desc}</div>
          <div className="d-flex justify-content-end">
            <Button className="mr-5" variant="outline-dark" onClick={this.createChecklist}>Checklist&nbsp;<BsArrowRight></BsArrowRight></Button>
          </div>
          { /* <Button onClick={this.deleteChecklist}>Delete</Button> */}
          { /* { <Button onClick={this.getChecklist}>Get</Button> } */ }
          { /*  <Button onClick={this.deleteChecklist}>Delete</Button>  */ }
        </React.Fragment>
      )
    } else {
      if (this.state.group === 'first') {
        jsx = (
          <React.Fragment>
            <Form onSubmit={this.handleSubmitOne}>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Due Date:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="dueDate">
                    <Form.Control
                      name="dueDate"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Number of Pages:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="pageNum">
                    <Form.Control
                      name="pageNum"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Topics to Include:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="topics">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="topics"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Number of Sources:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="sourcesNum">
                    <Form.Control
                      name="sourcesNum"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Types of Sources:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="sourcesTypes">
                    <Form.Control
                      name="sourcesTypes"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div className="mr-3 d-flex align-items-center">
                    <p>Questions to Address:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="quest">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="quest"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Col lg={7}>
                <Button variant='dark' style={{ float: 'right' }} type="submit">Next&nbsp;<BsArrowRight></BsArrowRight></Button>
              </Col>
            </Form>
            { /* <Button onClick={this.deleteChecklist}>Delete</Button> */ }
            { /* <Button onClick={this.getChecklist}>Get</Button> */ }
          </React.Fragment>
        )
      } else if (this.state.group === 'second') {
        jsx = (
          <React.Fragment>
            <Form onSubmit={this.handleSubmitTwo}>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Other Requirements:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="otherRequirements">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="otherRequirements"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Terms to Include:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="terms">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="terms"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Time Periods:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="periods">
                    <Form.Control
                      name="periods"
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>People:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="people">
                    <Form.Control
                      name="people"
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div>
                    <p>Issues:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="issues">
                    <Form.Control
                      name="issues"
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col lg={3} className="d-flex align-items-center">
                  <div className="mr-3 d-flex align-items-center">
                    <p>Things to Avoid:</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="avoid">
                    <Form.Control
                      name="avoid"
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Col lg={7}>
                <Button variant='dark' style={{ float: 'right' }} type="submit">Next&nbsp;<BsArrowRight></BsArrowRight></Button>
                <Button className="mr-2" variant='outline-dark' onClick={ () => this.setState({ group: 'first' })} style={{ float: 'right' }}>Back</Button>
              </Col>
            </Form>
            { /* <Button onClick={this.deleteChecklist}>Delete</Button> */ }
            { /* <Button onClick={this.getChecklist}>Get</Button> */ }
          </React.Fragment>
        )
      } else if (this.state.group === 'third') {
        jsx = (
          <React.Fragment>
            <h2 style={{ fontSize: '1rem' }}>You can add your own requirements too!</h2>
            <AddToChecklist user={this.props.location.props.user}></AddToChecklist>
          </React.Fragment>
        )
      }
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default withRouter(Checklist)
