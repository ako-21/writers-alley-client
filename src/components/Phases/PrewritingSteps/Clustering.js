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
import ExampleImage from './../../../images/clustering-1.jpg'
import ClusteringGrid from './ClusteringGrid'

class Clustering extends React.Component {
  state = {
    explanation: {
      view: 'one'
    }
  }

  render () {
    let jsx
    const heading = <h2 style={{ textAlign: 'center' }}>Clustering Explanation</h2>
    if (this.props.clustering.pagnation === 'explanation') {
      if (this.state.explanation.view === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
              Clustering is a way of listing ideas and keeping related ideas together.
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
              In clustering, you start with a core idea—the topic of your paper—at the center of the page and branch out into groups of related ideas.  You can then take the central idea of each branch and start a new cluster to develop each idea in more depth.  Review your clusters and eliminate those that don’t work.  Then decide on an order for the clusters.
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
                  Each cluster will become a topic for your paper, so write a topic sentence for each.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                    <Button className="mr-5" variant="dark" data-key="clustering" onClick={this.props.toExample}>To Example&nbsp;&#8594;</Button>
                  </div>
                </div>
      }
    } else if (this.props.clustering.pagnation === 'example') {
      const heading = <h2 style={{ textAlign: 'center' }}>Clustering Example</h2>
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
    } else if (this.props.clustering.pagnation === 'worksheet') {
      jsx = <ClusteringGrid></ClusteringGrid>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default Clustering
