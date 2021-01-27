import React from 'react'
// import NoteBookNav from './NoteBookNav/NoteBookNav'
import Spinner from './../Spinner/Spinner'
import NewWritingButton from './NewWritingButton'
import WritingDropDown from './WritingDropDown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { BsArrowUpLeft } from 'react-icons/bs'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import NewWritingModal from './NewWritingModal'
import { withRouter } from 'react-router-dom'

class UserHome extends React.Component {
  state = {
    loading: true,
    show: false,
    added: false,
    writing: {
      title: ''
    }
  }

  newWritingModal = () => {
    this.setState({ show: true, added: false })
  }

  newWritingModalClose = () => {
    this.setState({ show: false })
  }

  getRequest = () => {
    axios({
      url: `${apiUrl}/writings`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(response => {
        this.setState({
          writings: response.data.writings
        })
      })
  }

  handleInputChange = (event) => {
    const writingKey = event.target.name
    const value = event.target.value
    const writingCopy = Object.assign({}, this.state.title)
    writingCopy[writingKey] = value
    this.setState({ writing: writingCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ writing: {
      title: ''
    }
    })
    axios({
      method: 'POST',
      url: apiUrl + '/writings',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        writing: {
          title: this.state.writing.title,
          isComplete: false
        }
      }
    })
      .then(() => this.newWritingModalClose())
      .then(this.setState({ added: true }))
      .then(() => this.getRequest())
      // .then(() => this.props.history.push('/home'))
  }

  componentDidMount () {
    setTimeout(() => { this.setState({ loading: !this.state.loading }) }, 2000)
    if (this.props.location.state) {
      this.setState({ show: true })
    }
  }

  render () {
    let jsx
    if (this.state.loading === true) {
      jsx =
      <Spinner></Spinner>
    } else {
      jsx =
        <Container fluid className="mt-2">
          <Row>
            <Col lg={4}>
              <Col className="d-flex flex-row">
                <NewWritingButton newWritingModal={this.newWritingModal}></NewWritingButton>
                <WritingDropDown added={this.state.added} user={this.props.user}></WritingDropDown>
              </Col>
              <Col lg={6}>
                {/* <NoteBookNav></NoteBookNav> */}
              </Col>
            </Col>
          </Row>
          <NewWritingModal show={this.state.show} onHide={this.newWritingModalClose} onSubmit={this.handleSubmit} onChange={this.handleInputChange} onClick={this.newWritingModalClose}></NewWritingModal>
        </Container>
    }
    return (
      <div className="d-flex justify-content-start" style={{ width: '100%' }}>
        {jsx}
      </div>
    )
  }
}

export default withRouter(UserHome)
