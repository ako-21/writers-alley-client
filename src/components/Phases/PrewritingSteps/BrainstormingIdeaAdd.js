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
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
import BrainstormingKeyAdd from './BrainstormingKeyAdd'

class BrainstormingIdeaAdd extends React.Component {
  state = {
    ideas: [],
    idea: {
      name: ''
    }
  }

  handleInputChange = (event) => {
    const userInput = event.target.value
    this.setState({ idea: { name: userInput } })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ idea: { name: '' } })
    this.setState({ ideas: [...this.state.ideas, this.state.idea.name] })
  }
  render () {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <BrainstormingKeyAdd></BrainstormingKeyAdd>
            </Col>
            <Col lg={9}>
              <ListGroup className="overflowList1" variant="flush">
                {this.state.ideas.map(idea => (
                  <ListGroup.Item key={idea}>
                    {idea}
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
                placeholder="Enter Idea" />
            </Col>
            <Col className="col-2">
              <Button type="submit" variant="dark" size="small">Add</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    )
  }
}

export default BrainstormingIdeaAdd
