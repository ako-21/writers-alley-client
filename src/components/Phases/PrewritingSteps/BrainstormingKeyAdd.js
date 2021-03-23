import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
import Form from 'react-bootstrap/Form'
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
import { FiKey } from 'react-icons/fi'
import { GrFormAdd } from 'react-icons/gr'
import Modal from 'react-bootstrap/Modal'

class BrainstormingKeyAdd extends React.Component {
  state = {
    keys: [],
    key: {
      name: '',
      color: ''
    },
    colorOptions: [ 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'brown', 'grey' ]
  }

  handleInputChange = (event) => {
    const inputKey = event.target.name
    const value = event.target.value
    const objectCopy = Object.assign({}, this.state.key)
    objectCopy[inputKey] = value
    this.setState({ key: objectCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ key: { name: '', color: '' } })
    this.setState({ keys: [...this.state.keys, this.state.key] })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  render () {
    let jsx
    if (this.state.keys.length >= 1) {
      jsx =
      <div className="key">
        <div type="button" onClick={() => this.setState({ modal: true })}>
          <OverlayTrigger delay={{ show: 150, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Add to Worksheet Key</Tooltip>) }>
            <FiKey size={30}></FiKey><GrFormAdd></GrFormAdd>
          </OverlayTrigger>
          <ListGroup className="overflowList1" variant="flush">
            {this.state.ideas.map(key => (
              <ListGroup.Item key={key}>
                {key.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    } else {
      jsx = (
        <div className="key">
          <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Add to Worksheet Key</Tooltip>) }>
            <span type="button" onClick={() => this.setState({ modal: true })}>
              <FiKey type="button" onClick={() => this.setState({ modal: true })} size={30}></FiKey>&#43;
            </span>
          </OverlayTrigger>
        </div>
      )
    }
    return (
      <div>
        {jsx}
        <Modal show={this.state.modal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Key Reference</Modal.Title>
          </Modal.Header>
          <Form className="mt-2" onSubmit={this.handleSubmit}>
            <Form.Row className="mt-1 col-12">
              <Col className="col-6">
                <Form.Label> Key Name: </Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.key.name}
                  name="color"
                  as="input"
                  placeholder="Enter Name" />
              </Col>
              <Col className="col-6">
                <Form.Label> Key Color: </Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.key.color}
                  name="color"
                  as="select"
                  placeholder="Select Color"
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
                <Button className="mr-2 mb-2" type="submit" onClick={() => this.setState({ modal: false })} variant="dark" size="small">Add</Button>
              </Col>
            </Form.Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default BrainstormingKeyAdd
