import React from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { BsArrowLeft } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
// import { withRouter, Redirect } from 'react-router-dom'
// import messages from './AutoDismissAlert/messages'

class AddToChecklist extends React.Component {
  state = {
    userReq: {
      title: '',
      description: '',
      isChecked: false
    },
    userReqs: null,
    group: null
  }

  getRequest = () => {
    return axios({
      url: apiUrl + '/writings/' + this.props.id,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // .then(res => console.log(res.data.writing.checklist.userReq))
      .then(response => {
        this.setState({
          userReqs: response.data.writing.checklist.userReq
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
      .then(response => {
        this.setState({
          userReqs: response.data.writing.checklist.userReq
        })
      })
  }
  handleInputChange = (event) => {
    const userReqKey = event.target.name
    const value = event.target.value
    const userReqCopy = Object.assign({}, this.state.userReq)
    userReqCopy[userReqKey] = value
    this.setState({ userReq: userReqCopy })
  }

  handleSubmit = (event) => {
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
          isChecked: this.state.userReq.isChecked,
          writingId: this.props.id
        }
      }
    })
      .then(() => this.getRequest())
  }

  limit = (str, length) => {
    if (str.length <= length) {
      return str
    } else {
      return str.substring(0, length) + '...'
    }
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

  render () {
    let userReqList
    if (this.state.userReqs === null) {
      userReqList =
        <div></div>
    } else if (this.state.userReqs.length === 0) {
      userReqList =
        <div></div>
    } else {
      userReqList = (
        <ListGroup variant="flush">
          {this.state.userReqs.map(req => (
            <ListGroup.Item key={req._id}>
              <Row>
                <Col lg={4}>
                  {this.limit(req.title, 30)}
                </Col>
                <Col lg={6}>
                  {this.limit(req.description, 48)}
                </Col>
                <Col lg={2} onClick={this.deleteUserReq} id={req._id} className="d-flex align-items-center">
                  <TiDeleteOutline type="button" id={req._id} size={20}></TiDeleteOutline>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )
    }

    return (
      <React.Fragment>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col lg={6}>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.userReq.title}
                  name="title"
                  required
                  placeholder="Enter Requirement" />
              </Col>
            </Form.Row>
            <Form.Row className="mt-1">
              <Col lg={6}>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.userReq.description}
                  name="description"
                  required
                  as="textarea"
                  className="description"
                  placeholder="Enter Requirement Detail" />
              </Col>
            </Form.Row>
            <Col lg={6}>
              <Button style={{ float: 'right' }} type="submit" variant="dark" size="small" className="mt-1">Add</Button>
            </Col>
          </Form>
        </div>
        <div className="mt-5">
          <Col lg={7}>
            {userReqList}
            <Button className="mt-5" variant='dark' onClick={this.props.handleSubmit} style={{ float: 'right' }}>Done</Button>
            <Button className="mt-5 mr-2" variant='outline-dark' onClick={this.props.toSecond} style={{ float: 'right' }}><BsArrowLeft></BsArrowLeft>Back</Button>
          </Col>
        </div>
      </React.Fragment>
    )
  }
}

export default AddToChecklist
