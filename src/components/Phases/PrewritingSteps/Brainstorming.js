import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import Figure from 'react-bootstrap/Figure'
import ExampleImage from './../../../images/brainstorming-1.jpg'
import BrainstormingTopicAdd from './BrainstormingTopicAdd'

class Brainstorming extends React.Component {
  state = {
    explanation: {
      view: 'one'
    }
  }
  render () {
    let jsx
    const heading = <h2 style={{ textAlign: 'center' }}>Brainstorming Explanation</h2>
    if (this.props.brainstorming.pagnation === 'explanation') {
      if (this.state.explanation.view === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
      Brainstorming is the process of generating ideas by letting your mind list as many ideas as possible. There are no bad ideas in brainstorming, so turn off your internal critic.  Sometimes one not-so-good idea will lead your mind to a great idea.
              </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.explanation.view === 'two') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
      Keep listing ideas as they come.  They don’t have to be in any order.  Once you have generated your list, you can analyze your material.  Select what works, and omit what doesn’t.  Group related ideas.  A strategy that works well is to color code ideas, so that one group of related ideas is green, another blue, etc.
              </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'one' } })}><BsArrowLeft></BsArrowLeft></Button>
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'three' } })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.explanation.view === 'three') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
      Then take each group and write a topic sentence for it.  Put that topic sentence at the top of a page and do additional brainstorming on each subtopic until you have generated enough to offer substance in your paper.
              </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                <Button className="mr-5" variant="dark" data-key="brainstorming" onClick={this.props.toExample}>To Example&nbsp;&#8594;</Button>
              </div>
            </div>
      }
    } else if (this.props.brainstorming.pagnation === 'example') {
      const heading = <h2 style={{ textAlign: 'center' }}>Brainstorming Example</h2>
      jsx =
      <div className="mt-5">
        {heading}
        <div className="d-flex justify-content-center">
          <Col>
            <Figure>
              <Figure.Image
                src={ExampleImage}
              />
            </Figure>
          </Col>
        </div>
      </div>
    } else if (this.props.brainstorming.pagnation === 'worksheet') {
      const heading = <h2 style={{ textAlign: 'center' }}>Brainstorming Worksheet</h2>
      jsx =
      <div className="mt-2">
        {heading}
        <BrainstormingTopicAdd></BrainstormingTopicAdd>
      </div>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default Brainstorming
