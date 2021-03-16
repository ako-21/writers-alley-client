import React from 'react'
// import UserHome from './../UserHome/UserHome'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BsArrowRight } from 'react-icons/bs'
import { FiAlertTriangle } from 'react-icons/fi'
// import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import AddToChecklist from './AddToChecklist'
import EditChecklist from './EditChecklist'
import Spinner2 from './../Spinner/Spinner2'

class Checklist extends React.Component {
  state = {
    nextPhaseButton: '',
    loading: true,
    isStarted: null,
    isComplete: false,
    isProcess: false,
    group: 'first',
    dateModal: false,
    programReq: {
      title1: 'Due Date',
      description1: '',
      isChecked1: false,
      title2: 'Number of Pages',
      description2: '',
      isChecked2: false,
      title3: 'Topics to Include',
      description3: '',
      isChecked3: false,
      title4: 'Number of Sources',
      description4: '',
      isChecked4: false,
      title5: 'Types of Sources',
      description5: '',
      isChecked5: false,
      title7: 'Terms to Include',
      description7: '',
      isChecked7: false,
      title8: 'Time Periods',
      description8: '',
      isChecked8: false,
      title9: 'People',
      description9: '',
      isChecked9: false,
      title10: 'Issues',
      description10: '',
      isChecked10: false,
      title11: 'Things to Avoid',
      description11: '',
      isChecked11: false
    }
  }

  componentDidMount () {
    // setTimeout(() => { this.setState({ loading: !this.state.loading }) }, 1000)
    if (this.state.loading === true) {
      axios({
        url: `${apiUrl}/writings/${this.props.match.params.id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        }
      })
        // .then(res => console.log(res.data))
        .then((res) => {
          if (!res.data.writing.checklist) {
            this.setState({ isStarted: false, loading: false })
          } else {
            this.setState({
              isStarted: res.data.writing.checklist.isStarted,
              isComplete: res.data.writing.checklist.isComplete,
              isProcess: res.data.writing.checklist.isProcess,
              loading: false
            })
          }
        })
        .catch(error => {
        // handle error
          console.log(error)
        })
    }
  }

  handleInputChange = (event) => {
    const programReqKey = event.target.name
    const value = event.target.value
    const programReqCopy = Object.assign({}, this.state.programReq)
    programReqCopy[programReqKey] = value
    this.setState({ programReq: programReqCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: apiUrl + '/programReqs',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        programReq: {
          title: this.state.programReq.title1, description: this.state.programReq.description1, isChecked: false, writingId: this.props.match.params.id
        },
        writingId: this.props.match.params.id
      }
    })
    if (this.state.programReq.description2 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title2, description: this.state.programReq.description2, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description3 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title3, description: this.state.programReq.description3, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description4 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title4, description: this.state.programReq.description4, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description5 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title5, description: this.state.programReq.description5, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description7 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title7, description: this.state.programReq.description7, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description8 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title8, description: this.state.programReq.description8, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description9 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title9, description: this.state.programReq.description9, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description10 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title10, description: this.state.programReq.description10, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    if (this.state.programReq.description11 !== '') {
      axios({
        method: 'POST',
        url: apiUrl + '/programReqs',
        headers: {
          'Authorization': `Bearer ${this.props.location.props.user.token}`
        },
        data: {
          programReq: { title: this.state.programReq.title11, description: this.state.programReq.description11, isChecked: false, writingId: this.props.match.params.id },
          writingId: this.props.match.params.id
        }
      })
    }
    axios({
      method: 'PATCH',
      url: apiUrl + '/checklists/' + this.state.checklistId,
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        checklist: {
          isStarted: true,
          isComplete: true,
          isProcess: true,
          writingId: this.props.match.params.id,
          checklistId: this.state.checklistId
        }
      }
    })
      .then(() => this.props.getWritingDetailChecklist())
      .then(this.setState({ loading: true }))
      .then(setTimeout(() => { this.setState({ isProcess: true }) }, 1000))
      .then(this.setState({ nextPhaseButton: true }))
  }

  createChecklist = (event) => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: apiUrl + '/writings/' + this.props.match.params.id,
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        writing: {
          phase: 'checklist'
        }
      }
    })
    axios({
      method: 'POST',
      url: apiUrl + '/checklists',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      },
      data: {
        checklist: {
          isStarted: false,
          isComplete: false,
          isProcess: false,
          writingId: this.props.match.params.id
        }
      }
    })
    // .then(() => this.getChecklist())
      .then(() => this.setState({ isStarted: true }))
  }
  getChecklist = (event) => {
    axios({
      method: 'GET',
      url: apiUrl + '/writings/' + this.props.match.params.id,
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      }
    })
      .then(res => this.setState({
        isStarted: res.data.writing.checklist.isStarted,
        isComplete: res.data.writing.checklist.isComplete,
        isProcess: res.data.writing.checklist.isProcess,
        checklistId: res.data.writing.checklist._id
      }))
  }

  // getChecklist2 = (event) => {
  //   axios({
  //     method: 'GET',
  //     url: apiUrl + '/writings/' + this.props.match.params.id,
  //     headers: {
  //       'Authorization': `Bearer ${this.props.location.props.user.token}`
  //     }
  //   })
  //     .then(res => console.log(res.data))
  // }

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

  toSecond = () => {
    this.setState({ group: 'second' })
  }

  dateModalClose = () => {
    this.setState({ dateModal: false })
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Phase 1: Checklist</h2>
    const desc = <p style= {{ teaxtAlign: 'center' }}>You can create a checklist by entering the key requirements from your assignment sheet into the appropriate fields. Disregard any fields that you do not need, and feel free to add any neccessary fields that aren&apos;t currently included.</p>
    let jsx
    if (this.state.isProcess === true) {
      jsx = (
        <React.Fragment>
          { /* <Button onClick={this.getChecklist2}>Get</Button><Button onClick={this.deleteChecklist}>Delete</Button> */ }
          <EditChecklist {...this.state} prewritingPhase={this.props.prewritingPhase} getWritingDetailChecklist={this.props.getWritingDetailChecklist} user={this.props.location.props.user} id={this.props.match.params.id} checklistId={this.state.checklistId}></EditChecklist>
        </React.Fragment>
      )
    } else if (this.state.loading === true) {
      jsx = (<Spinner2></Spinner2>)
    } else {
      if (this.state.isStarted === true) {
        if (this.state.group === 'first') {
          jsx = (
            <React.Fragment>
              <Form>
                <Form.Row>
                  <Col lg={3} className="d-flex align-items-center">
                    <div>
                      <p>Due Date:</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="dueDate">
                      <Form.Control
                        name="description1"
                        onChange={this.handleInputChange}
                        value={this.state.programReq.description1}
                        type="date"
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
                        type="number"
                        name="description2"
                        onChange={this.handleInputChange}
                        value={this.state.programReq.description2}
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
                        name="description3"
                        value={this.state.programReq.description3}
                        onChange={this.handleInputChange}
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
                        name="description4"
                        type="number"
                        value={this.state.programReq.description4}
                        onChange={this.handleInputChange}
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
                        name="description5"
                        value={this.state.programReq.description5}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Col lg={7}>
                  <Button onClick={ () => { if (this.state.programReq.description1 === '') { this.setState({ dateModal: true }) } else { this.setState({ group: 'second' }) } }} variant='dark' style={{ float: 'right' }}>Next&nbsp;<BsArrowRight></BsArrowRight></Button>
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
                      <p>Terms to Include:</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="terms">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="description7"
                        value={this.state.programReq.description7}
                        onChange={this.handleInputChange}
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
                        as="textarea"
                        rows={2}
                        name="description8"
                        value={this.state.programReq.description8}
                        onChange={this.handleInputChange}
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
                        as="textarea"
                        rows={2}
                        name="description9"
                        value={this.state.programReq.description9}
                        onChange={this.handleInputChange}
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
                        as="textarea"
                        rows={2}
                        name="description10"
                        value={this.state.programReq.description10}
                        onChange={this.handleInputChange}
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
                        as="textarea"
                        rows={2}
                        name="description11"
                        value={this.state.programReq.description11}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Col lg={7}>
                  <Button variant='dark' style={{ float: 'right' }} onClick={() => this.setState({ group: 'third' })}>Next&nbsp;<BsArrowRight></BsArrowRight></Button>
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
              <AddToChecklist handleSubmit={this.handleSubmit} id={this.props.match.params.id} toSecond={this.toSecond} user={this.props.location.props.user}></AddToChecklist>
            </React.Fragment>
          )
        }
      } else {
        jsx = (
          <React.Fragment>
            <div className="mt-5">{heading}</div>
            <div className="mt-2">{desc}</div>
            <div className="d-flex justify-content-end">
              <Button className="mr-5" variant="outline-dark" onClick={this.createChecklist}>Checklist&nbsp;<BsArrowRight></BsArrowRight></Button>
            </div>
            { /* <Button onClick={this.deleteChecklist}>Delete</Button> */ }
            { /* <Button onClick={this.getChecklist}>Get</Button> */ }
            { /*  <Button onClick={this.deleteChecklist}>Delete</Button>  */ }
          </React.Fragment>
        )
      }
    }
    return (
      <React.Fragment>
        <div>{jsx}</div>
        <Modal show={this.state.dateModal} onHide={this.dateModalClose}>
          <Modal.Header closeButton>
            <Modal.Title><FiAlertTriangle></FiAlertTriangle>&nbsp;Important&nbsp;<FiAlertTriangle></FiAlertTriangle></Modal.Title>
          </Modal.Header>
          <Modal.Body>A Due Date is required. Please enter a Due Date before moving on.</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.dateModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withRouter(Checklist)
