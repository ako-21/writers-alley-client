import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
import { FiKey } from 'react-icons/fi'
// import { GrFormAdd } from 'react-icons/gr'
// import Modal from 'react-bootstrap/Modal'

class BrainstormingKeyAdd extends React.Component {
  state = {
    // keys: [],
    // key: {
    //   name: '',
    //   color: ''
    // },
    // colorOptions: [ '', 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'orange', 'black', 'brown', 'grey' ]
  }

  // handleInputChange = (event) => {
  //   const inputKey = event.target.name
  //   const value = event.target.value
  //   const objectCopy = Object.assign({}, this.state.key)
  //   objectCopy[inputKey] = value
  //   this.setState({ key: objectCopy })
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({ key: { name: '', color: '' } })
  //   this.setState({ keys: [...this.state.keys, this.state.key] })
  //   this.setState({ modal: false })
  // }
  //
  // closeModal = () => {
  //   this.setState({ modal: false })
  // }

  render () {
    let jsx
    if (this.props.ideas.length >= 1) {
      if (this.props.keys.length >= 1) {
        jsx =
      <div className="key">
        <OverlayTrigger delay={{ show: 150, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Add to Worksheet Key</Tooltip>) }>
          <span type="button" onClick={this.props.openModal}>
            <FiKey type="button" onClick={this.props.openModal} size={20}></FiKey>&#43;
          </span>
        </OverlayTrigger>
        <div className="keyList mt-1">
          {this.props.keys.map(key => (
            <p className="mb-0" style={{ color: key.color, fontSize: '.475rem' }} key={key}>
              {key.name}
            </p>
          ))}
        </div>
      </div>
      } else {
        jsx = (
          <div className="key">
            <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Add to Worksheet Key</Tooltip>) }>
              <span type="button" onClick={this.props.openModal}>
                <FiKey type="button" onClick={this.props.openModal} size={20}></FiKey>&#43;
              </span>
            </OverlayTrigger>
          </div>
        )
      }
    } else {
      jsx =
    <div></div>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default BrainstormingKeyAdd
