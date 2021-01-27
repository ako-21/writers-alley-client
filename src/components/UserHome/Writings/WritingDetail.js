import React from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import { withRouter } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import NewWritingButton from './../NewWritingButton'
import WritingDropDown from './../WritingDropDown'
import NoteBookNav from './../NoteBookNav/NoteBookNav'
import Container from 'react-bootstrap/Container'
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checklist from './../../Phases/Checklist'
import NewWritingModal from './../NewWritingModal'

class WritingDetail extends React.Component {
  state = {
    title: '',
    hovered: false,
    show: false,
    checklist: {
      isComplete: '',
      id: ''
    },
    writing: {
      title: ''
    },
    added: false,
    showNWM: false
  }
  getRequest = () => {
    axios({
      url: `${apiUrl}/writings`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
  }
  getWritingDetailChecklist = () => {
    axios({
      method: 'GET',
      url: apiUrl + '/writings/' + this.props.match.params.id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({
        checklist: {
          isComplete: res.data.writing.checklist.isComplete
        }
      }))
  }

  hoverButton = () => {
    this.setState({ hovered: !this.state.hovered })
  }

  openDeleteModal = () => {
    this.setState({ show: true })
  }

  closeDeleteModal = () => {
    this.setState({ show: false })
  }

  deleteWriting = () => {
    axios({
      url: `${apiUrl}/writings/` + this.props.match.params.id,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(() => this.props.history.push('/home'))
  }

  newWritingModal = () => {
    this.setState({ showNWM: true, added: false })
  }

  newWritingModalClose = () => {
    this.setState({ showNWM: false })
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
    axios({
      url: `${apiUrl}/writings/` + this.props.match.params.id,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        if (res.data.writing.checklist) {
          this.setState({ title: res.data.writing.title,
            checklist: {
              isComplete: res.data.writing.checklist.isComplete,
              id: res.data.writing.checklist._id
            } })
        } else {
          this.setState({ title: res.data.writing.title })
        }
      }
      )
  }
  render () {
    let trashButton
    if (this.state.hovered === false) {
      trashButton = <AiOutlineDelete size={28} type="button" onMouseEnter={this.hoverButton} onMouseLeave={this.hoverButton} onClick={this.openDeleteModal}></AiOutlineDelete>
    } else {
      trashButton =
      <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Delete Writing</Tooltip>) }>
        <AiFillDelete size={28} type="button" onMouseEnter={this.hoverButton} onMouseLeave={this.hoverButton} onClick={this.openDeleteModal}></AiFillDelete>
      </OverlayTrigger>
    }
    return (
      <Container fluid className="mt-2">
        <Row>
          <Col lg={3}>
            <Col className="d-flex flex-row">
              <NewWritingButton newWritingModal={this.newWritingModal}></NewWritingButton>
              <WritingDropDown added={this.state.added} user={this.props.user}></WritingDropDown>
            </Col>
            <Col lg={8}>
              <NoteBookNav {...this.state} userToken={this.props.user.token} writingId={this.props.match.params.id}></NoteBookNav>
            </Col>
          </Col>
          <Col lg={8}>
            <div style={{ marginTop: '4rem' }} className="d-flex flex-row">
              <div>
                <h1 className="mr-2">{this.state.title}</h1>
              </div>
              <div className="d-flex align-items-center">
                {trashButton}
              </div>
            </div>
            <div className="mt-3">
              <Checklist getWritingDetailChecklist={this.getWritingDetailChecklist}></Checklist>
            </div>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.closeDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete this writing?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Deleting <span style={{ fontWeight: 'bold' }}>{this.state.title}</span> cannot be undone!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={this.closeDeleteModal}>
      Cancel
            </Button>
            <Button onClick={this.deleteWriting} variant="dark">
      Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <NewWritingModal show={this.state.showNWM} onHide={this.newWritingModalClose} onSubmit={this.handleSubmit} onChange={this.handleInputChange} onClick={this.newWritingModalClose}></NewWritingModal>
      </Container>
    )
  }
}

export default withRouter(WritingDetail)
