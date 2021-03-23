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
import ExampleImage from './../../../images/mentalpicture-1.jpg'

class MentalPicture extends React.Component {
  state = {
    explanation: {
      view: 'one'
    }
  }
  render () {
    let jsx
    const heading = <h2 style={{ textAlign: 'center' }}>Creating a Mental Picture Explanation</h2>
    if (this.props.mentalPicture.pagnation === 'explanation') {
      if (this.state.explanation.view === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
                Strong writing uses detail to make a reader feel present in the event described.  The details make the writing interesting and lively and create an emotional connection with the reader. Your goal is to show your topic to make it more true for a reader and to get your reader emotionally involved.
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
                You can develop detailed description by using your five senses.  In addition, add in the emotional feel of your topic.
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
                You will probably generate more detail than you need.  Once you have generated as much material as possible, you can select what you will actually use.  You should select details that enhance your purpose and eliminate those that detract or distract from them.
              </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'four' } })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.explanation.view === 'four') {
        jsx =
                <div className="mt-5">
                  {heading}
                  <p style={{ textAlign: 'center' }}>
                    For example, a description of a home with the purpose of showing its coziness would include the smell of baking bread and the soft down cushions on the sofa.  It wouldn’t include details about a white ceiling, even if that point was generated during prewriting.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                    <Button className="mr-5" variant="dark" data-key="mentalPicture" onClick={this.props.toExample}>To Example&nbsp;&#8594;</Button>
                  </div>
                </div>
      }
    } else if (this.props.mentalPicture.pagnation === 'example') {
      const heading = <h2 style={{ textAlign: 'center' }}>Mental Picture Example</h2>
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
    } else if (this.props.mentalPicture.pagnation === 'worksheet') {
      jsx = <div>worksheet</div>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default MentalPicture
