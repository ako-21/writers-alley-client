import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class CheckedChecklist extends React.Component {
  render () {
    let checkBox
    if (this.props.checked === false) {
      checkBox = (
        <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Check Requirement</Tooltip>) }>
          <ImCheckboxUnchecked type="button" onClick={this.props.onClick} size={20} id={this.props.id} checked={this.props.checked}></ImCheckboxUnchecked>
        </OverlayTrigger>
      )
    } else {
      checkBox = (
        <OverlayTrigger delay={{ show: 250, hide: 400 }} placement="top" overlay={ (props) => (<Tooltip {...props} show={props.show.toString()}>Uncheck Requirement</Tooltip>) }>
          <ImCheckboxChecked type="button" onClick={this.props.onClick} size={20} id={this.props.id} checked={this.props.checked}></ImCheckboxChecked>
        </OverlayTrigger>
      )
    }
    return (
      <React.Fragment>
        {checkBox}
      </React.Fragment>
    )
  }
}

export default CheckedChecklist
