import React from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import messages from './AutoDismissAlert/messages'

class AddToChecklist extends React.Component {
  state = {
    userReq: {
      title: '',
      description: '',
      isChecked: false
    },
    userReqs: null
  }

  componentDidMount () {
    return axios({
      url: apiUrl + '/checklists',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(response => {
        this.setState({
          userReqs: response.data.checklists.userReqs
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
      description: ''
    } })
    axios({
      method: 'POST',
      url: apiUrl + '/userReqs',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        userReq: this.state.userReq
      }
    })
  }

  render () {
    let userReqList
    if (this.state.userReqs === null || this.state.userReqs.length === 0) {
      userReqList = (
        <div></div>
      )
    } else {
      userReqList = (
        <React.Fragment>
          {this.state.userReqs.map(req => (
            <p key={req._id} title={req.title} body={req.body}></p>
          ))}
        </React.Fragment>
      )
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col xs={5}>
              <Form.Control
                onChange={this.handleInputChange}
                value={this.state.userReq.title}
                name="title"
                placeholder="Enter Title" />
            </Col>
            <Col>
              <Form.Control
                onChange={this.handleInputChange}
                value={this.state.userReq.description}
                name="description"
                className="description"
                placeholder="Enter Description" />
            </Col>
            <Button type="submit" variant="dark" size="small">Add</Button>
          </Form.Row>
        </Form>
        <div>{userReqList}</div>
      </div>
    )
  }
}

export default AddToChecklist
