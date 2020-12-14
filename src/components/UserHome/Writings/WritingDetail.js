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

class WritingDetail extends React.Component {
  state = {
    title: '',
    hovered: false,
    show: false
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

  componentDidMount () {
    axios({
      url: `${apiUrl}/writings/` + this.props.match.params.id,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ title: res.data.writing.title }))
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
              <NoteBookNav></NoteBookNav>
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
              <Checklist></Checklist>
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
      </Container>
    )
  }
}

export default withRouter(WritingDetail)
