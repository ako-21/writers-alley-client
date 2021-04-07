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
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import Figure from 'react-bootstrap/Figure'
// import ExampleImage from './../../../images/brainstorming-1.jpg'
// import { FiKey } from 'react-icons/fi'
// import { GrFormAdd } from 'react-icons/gr'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { IconContext } from 'react-icons'
import { BsCircleFill } from 'react-icons/bs'

class BrainstormingKeyColors extends React.Component {
  render () {
    return (
      <div className="keycolors">
        <div className="d-flex flex-row">
          {this.props.keys.map(key => (
            <IconContext.Provider key={key} value={{ color: key.color, className: 'global-class-name' }}>
              <div className="mr-1" type="button" data-name={this.props.aidea} data-color={key.color} onClick={this.props.changeColor}>
                <BsCircleFill />
              </div>
            </IconContext.Provider>
          ))}
        </div>
      </div>
    )
  }
}

export default BrainstormingKeyColors
