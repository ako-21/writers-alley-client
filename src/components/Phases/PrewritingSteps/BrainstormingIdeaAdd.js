import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
import Modal from 'react-bootstrap/Modal'
import BrainstormingKeyAdd from './BrainstormingKeyAdd'
import BrainstormingKeyColors from './BrainstormingKeyColors'
import { RiChatNewLine } from 'react-icons/ri'

class BrainstormingIdeaAdd extends React.Component {
  state = {
    ideas: [],
    idea: {
      name: '',
      topicName: ''
    },
    keys: [],
    key: {
      name: '',
      color: ''
    },
    colorOptions: [ '', 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'orange', 'brown', 'grey' ],
    modal: false
  }

  handleInputChange = (event) => {
    const userInput = event.target.value
    this.setState({ idea: { name: userInput, topicName: this.props.activeItem } })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ idea: { name: '', topicName: '' } })
    this.setState({ ideas: [...this.state.ideas, this.state.idea] })
  }

  handleInputChangeKey = (event) => {
    const inputKey = event.target.name
    const value = event.target.value
    const objectCopy = Object.assign({}, this.state.key)
    objectCopy[inputKey] = value
    this.setState({ key: objectCopy })
  }

  handleSubmitKey = (event) => {
    event.preventDefault()
    const newArr = this.state.colorOptions.filter(color => this.state.key.color !== color)
    this.setState({ colorOptions: newArr })
    this.setState({ key: { name: '', color: '' } })
    this.setState({ keys: [...this.state.keys, this.state.key] })
    this.setState({ modal: false })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  changeColor = (event) => {
    const id = event.currentTarget.dataset.name
    const color = event.currentTarget.dataset.color
    document.getElementById(id).style.color = color
  }
  render () {
    const ideaArray = this.state.ideas.filter(idea => idea.topicName === this.props.activeItem)
    return (
      <div>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <BrainstormingKeyAdd handleInputChangeKey={this.handleInputChangeKey} handleSubmitKey={this.handleSubmitKey} closeModal={this.closeModal} openModal={this.openModal} {...this.state}></BrainstormingKeyAdd>
            </Col>
            <Col lg={9}>
              <ListGroup className="overflowList1" variant="flush">
                {ideaArray.map(idea => (
                  <ListGroup.Item key={idea.name}>
                    <Row>
                      <Col lg={8}>
                        <div id={idea.name} data-id={idea.name} type="button" onClick={this.props.newTopic}>
                          {idea.name} &nbsp;
                          <OverlayTrigger className="ideatip" delay={{ show: 150, hide: 400 }} placement="right" overlay={ (props) => (<Tooltip className="ideatip" {...props} show={props.show.toString()}>New Topic</Tooltip>) }>
                            <RiChatNewLine data-id={idea} className="mt-1 no-click-svg" size={10}></RiChatNewLine>
                          </OverlayTrigger>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <BrainstormingKeyColors aidea={idea.name} changeColor={this.changeColor} {...this.state}></BrainstormingKeyColors>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row className="mt-1 col-12">
            <Col className="col-10">
              <Form.Control
                onChange={this.handleInputChange}
                value={this.state.idea.name}
                name="idea"
                as="input"
                required
                placeholder="Enter Idea" />
            </Col>
            <Col className="col-2">
              <Button type="submit" variant="dark" size="small">Add</Button>
            </Col>
          </Form.Row>
        </Form>
        <Modal show={this.state.modal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Key Reference</Modal.Title>
          </Modal.Header>
          <Form className="mt-2" onSubmit={this.handleSubmitKey}>
            <Form.Row className="mt-1 col-12">
              <Col className="col-6">
                <Form.Label> Key Name: </Form.Label>
                <Form.Control
                  onChange={this.handleInputChangeKey}
                  value={this.state.key.name}
                  name="name"
                  as="input"
                  required
                  placeholder="Enter Name" />
              </Col>
              <Col className="col-6">
                <Form.Label> Key Color: </Form.Label>
                <Form.Control
                  onChange={this.handleInputChangeKey}
                  value={this.state.key.color}
                  name="color"
                  as="select"
                  required
                >
                  {this.state.colorOptions.map(color => (
                    <option key={color}>
                      {color}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col className="mt-2 d-flex justify-content-end">
                <Button className="mr-2 mb-2" type="submit" variant="dark" size="small">Add</Button>
              </Col>
            </Form.Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default BrainstormingIdeaAdd
