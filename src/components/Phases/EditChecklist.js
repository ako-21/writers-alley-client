import React from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ListGroup from 'react-bootstrap/ListGroup'
import { CgArrowsExpandRight } from 'react-icons/cg'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'
// import { withRouter, Redirect } from 'react-router-dom'
// import messages from './AutoDismissAlert/messages'
import Modal from 'react-bootstrap/Modal'
import CheckedChecklist from './CheckedChecklist'
import CompleteChecklist from './CompleteChecklist'

class EditChecklist extends React.Component {
  target = React.createRef()
  state = {
    userReqs: null,
    programReqs: null,
    editModalUser: false,
    editModalProgram: false,
    createModal: false,
    writingId: this.props.id,
    ellipseModal: false,
    modalTitle: '',
    modalDescription: '',
    runningIf: true,
    userReq: {
      title: '',
      description: '',
      isChecked: '',
      id: ''
    },
    programReq: {
      title: '',
      description: '',
      isChecked: '',
      id: ''
    }
  }

  getRequest = () => {
    return axios({
      url: apiUrl + '/writings/' + this.props.id,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(response => {
        this.setState({
          userReqs: response.data.writing.checklist.userReq,
          programReqs: response.data.writing.checklist.programReq
        })
      })
  }

  componentDidMount () {
    return axios({
      url: apiUrl + '/writings/' + this.props.id,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // .then(response => console.log(response.data.writing))
      .then(response => {
        this.setState({
          programReqs: response.data.writing.checklist.programReq,
          userReqs: response.data.writing.checklist.userReq
        })
      })
  }
  handleInputChangeProgram = (event) => {
    const programReqKey = event.target.name
    const value = event.target.value
    const programReqCopy = Object.assign({}, this.state.programReq)
    programReqCopy[programReqKey] = value
    this.setState({ programReq: programReqCopy })
  }

  handleSubmitProgram = (event) => {
    event.preventDefault()
    this.setState({ programReq: {
      title: '',
      description: '',
      isChecked: ''
    } })
    axios({
      method: 'PATCH',
      url: apiUrl + '/programReqs/' + this.state.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        programReq: {
          title: this.state.programReq.title,
          description: this.state.programReq.description,
          isChecked: this.state.programReq.isChecked,
          id: this.state.programReq.id,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
      .then(() => this.setState({ editModalProgram: false }))
  }
  handleInputChangeUser = (event) => {
    const userReqKey = event.target.name
    const value = event.target.value
    const userReqCopy = Object.assign({}, this.state.userReq)
    userReqCopy[userReqKey] = value
    this.setState({ userReq: userReqCopy })
  }

  handleSubmitUser = (event) => {
    event.preventDefault()
    this.setState({ userReq: {
      title: '',
      description: '',
      isChecked: ''
    } })
    axios({
      method: 'PATCH',
      url: apiUrl + '/userReqs/' + this.state.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        userReq: {
          title: this.state.userReq.title,
          description: this.state.userReq.description,
          isChecked: this.state.userReq.isChecked,
          id: this.state.userReq.id,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
      .then(() => this.setState({ editModalUser: false }))
  }
  handleInputChangeCreate = (event) => {
    const userReqKey = event.target.name
    const value = event.target.value
    const userReqCopy = Object.assign({}, this.state.userReq)
    userReqCopy[userReqKey] = value
    this.setState({ userReq: userReqCopy })
  }

  handleSubmitCreate = (event) => {
    event.preventDefault()
    this.setState({ userReq: {
      title: '',
      description: '',
      isChecked: this.state.userReq.isChecked
    } })
    axios({
      method: 'POST',
      url: apiUrl + '/userReqs',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        userReq: {
          title: this.state.userReq.title,
          description: this.state.userReq.description,
          isChecked: false,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
      .then(() => this.setState({ createModal: false }))
  }

  deleteUserReq = (event) => {
    event.persist()
    axios({
      method: 'DELETE',
      url: apiUrl + '/userReqs/' + event.currentTarget.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        writingId: this.props.id
      }
    })
      .then(() => this.getRequest())
  }

  deleteProgramReq = (event) => {
    event.persist()
    axios({
      method: 'DELETE',
      url: apiUrl + '/programReqs/' + event.currentTarget.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        writingId: this.props.id
      }
    })
      .then(() => this.getRequest())
  }

  checkedUser = (req) => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/userReqs/' + req._id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        userReq: {
          isChecked: !req.isChecked,
          id: req._id,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
      .then(() => this.setState({ runningIf: true }))
  }

  checkedProgram = (req) => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/programReqs/' + req._id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        programReq: {
          isChecked: !req.isChecked,
          id: req._id,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
      .then(() => this.setState({ runningIf: true }))
  }

  checklistComplete = () => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/checklists/' + this.props.checklistId,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        checklist: {
          isComplete: true,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.props.getWritingDetailChecklist())
      .then(() => this.setState({ runningIf: 'false' }))
  }

  checklistIncomplete = () => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/checklists/' + this.props.checklistId,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        checklist: {
          isComplete: false,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.props.getWritingDetailChecklist())
      .then(() => this.setState({ runningIf: 'false' }))
  }

  writingComplete = () => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/writings/' + this.props.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        writing: {
          isComplete: true
        }
      }
    })
      .then(() => this.props.getWritingDetailChecklist())
      .then(() => this.setState({ runningIf: 'false' }))
  }

  writingIncomplete = () => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/writings/' + this.props.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        writing: {
          isComplete: false
        }
      }
    })
      .then(() => this.props.getWritingDetailChecklist())
      .then(() => this.setState({ runningIf: 'false' }))
  }

  limit = (str, length) => {
    if (str.length <= length) {
      return str
    } else {
      return str.substring(0, length) + '... '
    }
  }

  countTitle = (str, length, req) => {
    const strArr = str.split('')
    if (strArr.length > length) {
      return <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Expand</Tooltip>) }><CgArrowsExpandRight onClick={() => this.setState({ ellipseModal: true, modalTitle: req.title, modalDescription: req.description })} title={req.title} description={req.description} type='button' size={11}></CgArrowsExpandRight></OverlayTrigger>
    } else {
      return false
    }
  }

  countDescription = (str, length, req) => {
    const strArr = str.split('')
    if (strArr.length > length) {
      return <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Expand</Tooltip>) }><CgArrowsExpandRight onClick={() => this.setState({ ellipseModal: true, modalTitle: req.title, modalDescription: req.description })} type='button' size={11}></CgArrowsExpandRight></OverlayTrigger>
    } else {
      return false
    }
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Phase 1: Checklist</h2>
    let userReqList
    if (this.state.userReqs === null) {
      userReqList = (<div></div>)
    } else {
      userReqList = (
        <ListGroup variant="flush">
          {this.state.userReqs.map(req => (
            <ListGroup.Item key={req._id} title={req.title} description={req.description} >
              <Row>
                <Col className={ req.isChecked ? 'strikethrough' : ''} lg={4}>
                  {this.limit(req.title, 20)}
                  {this.countTitle(req.title, 20, req)}
                </Col>
                <Col className={ req.isChecked ? 'strikethrough' : ''} lg={6}>
                  {this.limit(req.description, 30)}
                  {this.countDescription(req.description, 30, req)}
                </Col>
                <Col lg={2} className="d-flex align-items-center">
                  <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Edit Requirement</Tooltip>) }>
                    <TiEdit className="mr-2" type="button" size={20} onClick={() => this.setState({ editModalUser: true, userReq: { title: req.title, description: req.description, isChecked: req.isChecked, id: req._id } })} id={req._id}></TiEdit>
                  </OverlayTrigger>
                  <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Delete Requirement</Tooltip>) }>
                    <TiDeleteOutline className="mr-2" type="button" onClick={this.deleteUserReq} id={req._id} size={20}></TiDeleteOutline>
                  </OverlayTrigger>
                  <CheckedChecklist checked={req.isChecked} onClick={() => this.checkedUser(req)} id={req._id}></CheckedChecklist>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )
    }
    let programReqList
    if (this.state.programReqs === null) {
      programReqList = (<div></div>)
    } else {
      programReqList = (
        <ListGroup variant="flush">
          {this.state.programReqs.map(req => (
            <ListGroup.Item key={req._id}>
              <Row>
                <Col className={ req.isChecked ? 'strikethrough' : ''} lg={4}>
                  {this.limit(req.title, 20)}
                  {this.countTitle(req.title, 20)}
                </Col>
                <Col className={ req.isChecked ? 'strikethrough' : ''} lg={6}>
                  {this.limit(req.description, 30)}
                  {this.countDescription(req.description, 30)}
                </Col>
                <Col lg={2} id={req._id} className="d-flex align-items-center">
                  <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Edit Requirement</Tooltip>) }>
                    <TiEdit onClick={() => this.setState({ editModalProgram: true, programReq: { title: req.title, description: req.description, isChecked: req.isChecked, id: req._id } })} className="mr-2" type="button" size={20} id={req._id}></TiEdit>
                  </OverlayTrigger>
                  <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Delete Requirement</Tooltip>) }>
                    <TiDeleteOutline className="mr-2" type="button" onClick={this.deleteProgramReq} id={req._id} size={20}></TiDeleteOutline>
                  </OverlayTrigger>
                  <CheckedChecklist checked={req.isChecked} onClick={() => this.checkedProgram(req)} id={req._id}></CheckedChecklist>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )
    }
    return (
      <div>
        <div className="d-flex justify-content-center">
          {heading}
        </div>
        <div className="d-flex justify-content-center">
          <CompleteChecklist writingComplete={this.writingComplete} writingIncomplete={this.writingIncomplete} runningIf={this.state.runningIf} getWritingDetailChecklist={this.props.getWritingDetailChecklist} writingId={this.props.id} userToken={this.props.user.token} {...this.state}></CompleteChecklist>
        </div>
        <Button className="mb-4" variant="outline-dark" onClick={() => this.setState({ createModal: true })}>Add Requirement</Button>
        {userReqList}
        {programReqList}
        <Modal show={this.state.createModal} onHide={() => this.setState({ createModal: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Checklist Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitCreate}>
              <Form.Row>
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeCreate}
                    value={this.state.userReq.title}
                    name="title"
                    required />
                </Col>
              </Form.Row>
              <Form.Row className="mt-1">
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeCreate}
                    value={this.state.userReq.description}
                    name="description"
                    required
                    as="textarea"
                    className="description" />
                </Col>
              </Form.Row>
              <Col lg={12}>
                <Button style={{ float: 'right' }} type="submit" variant="dark" size="small" className="mt-3">Submit</Button>
              </Col>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => this.setState({ createModal: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.editModalUser} onHide={() => this.setState({ editModalUser: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Checklist Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitUser}>
              <Form.Row>
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeUser}
                    value={this.state.userReq.title}
                    name="title"
                    required />
                </Col>
              </Form.Row>
              <Form.Row className="mt-1">
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeUser}
                    value={this.state.userReq.description}
                    name="description"
                    required
                    as="textarea"
                    className="description" />
                </Col>
              </Form.Row>
              <Col lg={12}>
                <Button style={{ float: 'right' }} type="submit" variant="dark" size="small" className="mt-3">Submit Edit</Button>
              </Col>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => this.setState({ editModalUser: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.editModalProgram} onHide={() => this.setState({ editModalProgram: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Checklist Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitProgram}>
              <Form.Row>
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeProgram}
                    value={this.state.programReq.title}
                    name="title"
                    required />
                </Col>
              </Form.Row>
              <Form.Row className="mt-1">
                <Col lg={12}>
                  <Form.Control
                    onChange={this.handleInputChangeProgram}
                    value={this.state.programReq.description}
                    name="description"
                    required
                    as="textarea"
                    className="description" />
                </Col>
              </Form.Row>
              <Col lg={12}>
                <Button style={{ float: 'right' }} type="submit" variant="dark" size="small" className="mt-3">Submit Edit</Button>
              </Col>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => this.setState({ editModalProgram: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.ellipseModal} onHide={() => this.setState({ ellipseModal: false, modalTitle: '', modalDescription: '' })}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalDescription}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => this.setState({ ellipseModal: false, modalTitle: '', modalDescription: '' })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default EditChecklist
