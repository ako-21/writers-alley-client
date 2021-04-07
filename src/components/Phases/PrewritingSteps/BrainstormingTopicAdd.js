import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
import BrainstormingIdeaAdd from './BrainstormingIdeaAdd'
import Pagination from 'react-bootstrap/Pagination'
import Modal from 'react-bootstrap/Modal'

class BrainstormingTopicAdd extends React.Component {
  state = {
    topics: [],
    topic: {
      name: ''
    },
    modal: false
  }

  closeModal= () => {
    this.setState({ modal: false })
  }

  handleInputChange = (event) => {
    const userInput = event.target.value
    this.setState({ topic: { name: userInput } })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ topic: { name: '' } })
    this.setState({ topics: [...this.state.topics, this.state.topic.name] })
  }

  newTopic = (event) => {
    event.preventDefault()
    const currentArray = this.state.topics
    if (currentArray.every((index) => index !== event.target.id)) {
      this.setState({ topics: [...this.state.topics, event.target.id] })
    } else {
      return false
    }
  }

  render () {
    let jsx
    if (this.state.topics.length >= 1) {
      jsx =
      <div>
        <div className="d-flex justify-content-center">
          <Col lg={12}>
            <span onClick={() => this.setState({ modal: true })}>
            +
            </span>
            <Pagination size="sm" className="pagnation">
              {this.state.topics.map(topic => (
                <Pagination.Item key={topic}>
                  {topic}
                </Pagination.Item>
              ))}
            </Pagination>
            <p style={{ textAlign: 'center' }}>Add some ideas to your topic below.</p>
            <BrainstormingIdeaAdd newTopic={this.newTopic}></BrainstormingIdeaAdd>
          </Col>
        </div>
      </div>
    } else {
      jsx =
      <div>
        <p style={{ textAlign: 'center' }}>Now it&apos;s your turn! Add a topic you want to brainstorm. Then you will add ideas for that topic.</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row className="mt-1 col-12">
            <Col className="col-10">
              <Form.Control
                onChange={this.handleInputChange}
                value={this.state.topic.name}
                name="topic"
                as="input"
                required
                placeholder="Enter Topic" />
            </Col>
            <Col className="col-2">
              <Button type="submit" variant="dark" size="small">Add</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    }
    return (
      <div>
        {jsx}
        <Modal show={this.state.modal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Topic</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row className="mt-1 col-12">
              <Col className="col-10">
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.topic.name}
                  name="topic"
                  as="input"
                  required
                  placeholder="Enter Topic" />
              </Col>
              <Col className="col-2">
                <Button type="submit" variant="dark" size="small">Add</Button>
              </Col>
            </Form.Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default BrainstormingTopicAdd
