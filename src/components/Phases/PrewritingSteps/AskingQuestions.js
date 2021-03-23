import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'\import Button from 'react-bootstrap/Button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import ExampleImage1 from './../../../images/askingquestions1-1.jpg'
import ExampleImage2 from './../../../images/askingquestions2-1.jpg'
import ExampleImage3 from './../../../images/askingquestions3-1.jpg'

class AskingQuestions extends React.Component {
  state = {
    explanation: {
      view: 'one'
    },
    example: {
      view: 'one'
    }
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Asking Questions Explanation</h2>
    let jsx
    if (this.props.askingQuestions.pagnation === 'explanation') {
      if (this.state.explanation.view === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
                When writing a story, journalists start with basic questions: Who? What? Where? When? Why? and How?  These make a good starting point for any writing. Generate a list of questions you would like to know about your topic.
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
                Then write a list of questions that a reader will need answered.  Remember to consider a reader who doesn’t have your background and who may disagree with what you are saying.  Considering and addressing this reader’s questions will make your paper stronger.
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
                    Also, you can use the following prompts as questions to get started. Remember, though, it is not enough to ask the questions; you have to do the research and thinking to answer them in your paper.  Use your prewriting to determine what specific research you have to do, if you haven’t completed your research entirely.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                    <Button className="mr-5" variant="dark" onClick={() => this.setState({ explanation: { view: 'four' } })}><BsArrowRight></BsArrowRight></Button>
                  </div>
                </div>
      } else if (this.state.explanation.view === 'four') {
        jsx =
        <div className="mt-5">
          <h3 style={{ textAlign: 'center' }}>Asking Questions Explanation - Generic Questions</h3>
          <div className="d-flex justify-content-center mb-3">
            <Col>
              <ListGroup className="mt-2 overflowList">
                <ListGroup.Item style= {{ textAlign: 'center' }}>What defines my topic?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>What key ideas need to be considered and explained?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>What would people who disagree think?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>What other ways are there of looking at my topic?</ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'three' } })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'five' } })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.explanation.view === 'five') {
        jsx =
        <div className="mt-5">
          <h3 style={{ textAlign: 'center' }}>Asking Questions Explanation - Generic Questions</h3>
          <div className="d-flex justify-content-center mb-3">
            <Col>
              <ListGroup className="mt-2 overflowList">
                <ListGroup.Item style= {{ textAlign: 'center' }}>Is this a value judgment?  Why do I feel that way?  What would others feel?  Why?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>What are the parts of my topic?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>How do the parts fit together?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>What is the history of my topic?</ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'four' } })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'six' } })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.explanation.view === 'six') {
        jsx =
        <div className="mt-5">
          <h3 style={{ textAlign: 'center' }}>Asking Questions Explanation - Generic Questions</h3>
          <div className="d-flex justify-content-center mb-3">
            <Col>
              <ListGroup className="mt-2 overflowList">
                <ListGroup.Item style= {{ textAlign: 'center' }}>How have people of other times or cultures addressed my topic?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>Where does it come from?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>Why do I care?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>Why would my reader care?</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>How does my topic connect to the world?  To my community?  To my culture?</ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'five' } })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-5" variant="dark" data-key="askingQuestions" onClick={this.props.toExample}>To Example&nbsp;&#8594;</Button>
          </div>
        </div>
      }
    } else if (this.props.askingQuestions.pagnation === 'example') {
      const heading = <h2 style={{ textAlign: 'center' }}>Asking Questions Examples</h2>
      if (this.state.example.view === 'one') {
        jsx =
        <div className="mt-5">
          {heading}
          <div className="d-flex justify-content-center">
            <Col>
              <Figure>
                <Figure.Image
                  src={ExampleImage1}
                />
              </Figure>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'two' } })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.example.view === 'two') {
        jsx =
        <div className="mt-5">
          {heading}
          <div className="d-flex justify-content-center">
            <Col>
              <Figure>
                <Figure.Image
                  src={ExampleImage2}
                />
              </Figure>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'one' } })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'three' } })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.example.view === 'three') {
        jsx =
        <div className="mt-5">
          {heading}
          <div className="d-flex justify-content-center">
            <Col>
              <Figure>
                <Figure.Image
                  src={ExampleImage3}
                />
              </Figure>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
          </div>
        </div>
      }
    } else if (this.props.askingQuestions.pagnation === 'worksheet') {
      jsx = <div>worksheet</div>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default AskingQuestions
