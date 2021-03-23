import React from 'react'
// import UserHome from './../UserHome/UserHome'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
// import { FiAlertTriangle } from 'react-icons/fi'
// import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
// import Spinner2 from './../Spinner/Spinner2'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import { CgArrowsExpandRight } from 'react-icons/cg'
import Pagination from 'react-bootstrap/Pagination'
import Brainstorming from './PrewritingSteps/Brainstorming'
import Clustering from './PrewritingSteps/Clustering'
import FreeWriting from './PrewritingSteps/FreeWriting'
import AskingQuestions from './PrewritingSteps/AskingQuestions'
import MentalPicture from './PrewritingSteps/MentalPicture'

class Prewriting extends React.Component {
  state = {
    view: '',
    intro: 'one',
    exp: 'intro',
    brainstorming: {
      pagnation: 'explanation'
    },
    clustering: {
      pagnation: 'explanation'
    },
    askingQuestions: {
      pagnation: 'explanation'
    },
    freeWriting: {
      pagnation: 'explanation'
    },
    mentalPicture: {
      pagnation: 'explanation'
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/writings/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.location.props.user.token}`
      }
    })
      .then(res => {
        if (!res.data.writing.prewriting) {
          this.setState({
            view: 'one'
          })
        } else {
          this.setState({
            view: res.data.writing.prewriting.view
          })
        }
      }
      )
      .catch(error => {
        console.log(error)
      })
  }

  changePage = () => {
    // console.log(event.target.dataset.name)
    this.setState({ [event.target.dataset.key]: { pagnation: event.target.dataset.name } })
  }

  toExample = () => {
    this.setState({ [event.target.dataset.key]: { pagnation: 'example' } })
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Phase 2: Prewriting</h2>
    let jsx
    if (this.state.view === 'one') {
      if (this.state.intro === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
      You are ready to get started with prewriting. Prewriting only takes a little time, and it allows you to approach your paper with the confidence that you have enough to say.
              </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ intro: 'two' })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.intro === 'two') {
        jsx =
        <div className="mt-5">
          {heading}
          <p style= {{ textAlign: 'center' }}>
          It’s better to spend a few minutes on prewriting to decide if you have enough material to write about than to start writing a paper and realize after several hours of work that it won’t suit the assignment. Skip this step to your PERIL!
          </p>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ intro: 'one' })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ intro: 'three' })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.intro === 'three') {
        jsx =
        <div className="mt-5">
          {heading}
          <p style= {{ textAlign: 'center' }}>
          The quality of your prewriting affects the quality of your paper and therefore your grade.  You should think deeply and carefully about your topic, so you have as much to work with as possible.
          </p>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ intro: 'two' })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ intro: 'four' })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.intro === 'four') {
        jsx =
        <div className="mt-5">
          {heading}
          <p style= {{ textAlign: 'center' }}>
          It is usually better to generate more ideas than you need and have a lot to choose from than to develop the bare minimum and just get by.  Use this as an opportunity to look at your topic from different angles and to make new connections.  You may also need to return to prewriting activities if you run out of ideas as you are drafting.
          </p>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ intro: 'three' })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ view: 'two' })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      }
    } else if (this.state.view === 'two') {
      const headingExp = <h2 style={{ textAlign: 'center' }}>Phase 2: Prewriting Techniques</h2>
      if (this.state.exp === 'intro') {
        jsx =
        <div className="mt-5">
          {headingExp}
          <p style= {{ textAlign: 'center' }}>
          We will explore several techniques that can help you get your ideas flowing on the spot. Eventually you will probably settle on one technique that works best for you, but now you should try as many as possible and generate a variety of ideas. These techniques are:
          </p>
          <div className="d-flex justify-content-center">
            <Col lg={6}>
              <ListGroup>
                <ListGroup.Item style= {{ textAlign: 'center' }} variant="dark">Brainstorming</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>Clustering</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }} variant="dark">Free Writing</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }}>Asking Questions</ListGroup.Item>
                <ListGroup.Item style= {{ textAlign: 'center' }} variant="dark">Creating a Mental Picture</ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="d-flex justify-content-end mt-3 mb-5">
            <Button className="mr-2" variant='outline-dark' onClick={() => this.setState({ view: 'one', intro: 'one' })}>&#8592;&nbsp;Back to Intro</Button>
            <Button className="mr-5" variant='dark' onClick={() => this.setState({ view: 'two', exp: 'accordion' })}>Get Started&nbsp;&#8594;</Button>
          </div>
        </div>
      } else if (this.state.exp === 'accordion') {
        jsx =
        <div className="mt-5">
          {headingExp}
          <div className="mb-3">
            <Col className="d-flex justify-content-center">
              <p style={{ textAlign: 'center' }}>Click on a Technique below to open its tutorial. Remember, it&apos;s not required to utilize each technique. Simply pick whichever one(s) you&apos;re most comfortable using for your prewriting.</p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button className="mr-2" variant='outline-dark' onClick={() => this.setState({ view: 'one', intro: 'one', exp: 'intro' })}>&#8592;&nbsp;Back to Intro</Button>
            </Col>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <Col lg={10}>
              <Accordion>
                <Card style= {{ borderColor: 'black' }}>
                  <Accordion.Toggle as={Card.Header} style= {{ backgroundColor: '#c6c8ca' }} variant="link" eventKey="0">
                    <p style= {{ textAlign: 'center' }}>
                    Brainstorming
                    </p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item onClick={this.changePage} data-key="brainstorming" data-name="explanation" className="pagnation" active={this.state.brainstorming.pagnation === 'explanation'}>explanation</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="brainstorming" data-name="example" className="pagnation" active={this.state.brainstorming.pagnation === 'example'}>example</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="brainstorming" data-name="worksheet" className="pagnation" active={this.state.brainstorming.pagnation === 'worksheet'}>worksheet</Pagination.Item>
                      </Pagination>
                      <Brainstorming toExample={this.toExample}{...this.state}></Brainstorming>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style= {{ borderColor: 'black' }}>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    <p style= {{ textAlign: 'center' }}>
                    Clustering
                    </p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item onClick={this.changePage} data-key="clustering" data-name="explanation" className="pagnation" active={this.state.clustering.pagnation === 'explanation'}>explanation</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="clustering" data-name="example" className="pagnation" active={this.state.clustering.pagnation === 'example'}>example</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="clustering" data-name="worksheet" className="pagnation" active={this.state.clustering.pagnation === 'worksheet'}>worksheet</Pagination.Item>
                      </Pagination>
                      <Clustering toExample={this.toExample}{...this.state}></Clustering>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style= {{ borderColor: 'black' }}>
                  <Accordion.Toggle as={Card.Header} style= {{ backgroundColor: '#c6c8ca' }} variant="link" eventKey="2">
                    <p style= {{ textAlign: 'center' }}>
                    Free Writing
                    </p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item onClick={this.changePage} data-key="freeWriting" data-name="explanation" className="pagnation" active={this.state.freeWriting.pagnation === 'explanation'}>explanation</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="freeWriting" data-name="example" className="pagnation" active={this.state.freeWriting.pagnation === 'example'}>example</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="freeWriting" data-name="worksheet" className="pagnation" active={this.state.freeWriting.pagnation === 'worksheet'}>worksheet</Pagination.Item>
                      </Pagination>
                      <FreeWriting toExample={this.toExample}{...this.state}></FreeWriting>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style= {{ borderColor: 'black' }}>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                    <p style= {{ textAlign: 'center' }}>
                    Asking Questions
                    </p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item onClick={this.changePage} data-key="askingQuestions" data-name="explanation" className="pagnation" active={this.state.askingQuestions.pagnation === 'explanation'}>explanation</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="askingQuestions" data-name="example" className="pagnation" active={this.state.askingQuestions.pagnation === 'example'}>example</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="askingQuestions" data-name="worksheet" className="pagnation" active={this.state.askingQuestions.pagnation === 'worksheet'}>worksheet</Pagination.Item>
                      </Pagination>
                      <AskingQuestions toExample={this.toExample}{...this.state}></AskingQuestions>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style= {{ borderColor: 'black' }}>
                  <Accordion.Toggle as={Card.Header} style= {{ backgroundColor: '#c6c8ca' }} variant="link" eventKey="4">
                    <p style= {{ textAlign: 'center' }}>
                    Creating a Mental Picture
                    </p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item onClick={this.changePage} data-key="mentalPicture" data-name="explanation" className="pagnation" active={this.state.mentalPicture.pagnation === 'explanation'}>explanation</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="mentalPicture" data-name="example" className="pagnation" active={this.state.mentalPicture.pagnation === 'example'}>example</Pagination.Item>
                        <Pagination.Item onClick={this.changePage} data-key="mentalPicture" data-name="worksheet" className="pagnation" active={this.state.mentalPicture.pagnation === 'worksheet'}>worksheet</Pagination.Item>
                      </Pagination>
                      <MentalPicture toExample={this.toExample}{...this.state}></MentalPicture>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </div>
        </div>
      }
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default withRouter(Prewriting)
