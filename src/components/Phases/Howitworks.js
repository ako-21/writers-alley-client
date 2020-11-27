import React from 'react'
// import UserHome from './../UserHome/UserHome'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { BsArrowRight, BsArrowLeft, BsBook } from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group'
import { Redirect } from 'react-router-dom'

class Howitworks extends React.Component {
  state = {
    pt1: true,
    pt2: false,
    pt3: false,
    home: false
  }

  movePt2 = () => {
    this.setState({
      pt1: false,
      pt2: true,
      pt3: false
    })
  }

  movePt3 = () => {
    this.setState({
      pt1: false,
      pt2: false,
      pt3: true
    })
  }

  movePt1 = () => {
    this.setState({
      pt1: true,
      pt2: false,
      pt3: false
    })
  }

  render () {
    if (this.state.home === true) {
      return <Redirect to={{ pathname: '/home', state: { show: true } }} />
    }
    let jsx
    if (this.state.pt1 === true) {
      jsx =
      <CSSTransition in={true} appear={true} timeout={2000}
        classNames="heading">
        <div>
          <p style={{ textAlign: 'center' }}>
        Welcome to the Writer’s Alley Interactive Writing Tutorial! This program
    will walk you through the process of writing papers for your college classes
    by providing you prompts to help you develop and organize your ideas. It is
    intended to teach you writing and thinking skills to help you write more
    successfully.
          </p>
          <div className="d-flex justify-content-end">
            <Button className="mr-5" variant="outline-dark" onClick={this.movePt2}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      </CSSTransition>
    } else if (this.state.pt2 === true) {
      jsx =
      <div>
        <p style= {{ textAlign: 'center' }}>
      Each writing project will include a &nbsp; <Button variant='dark' >Notebook &nbsp;<BsBook></BsBook></Button>  &nbsp; that will show you which
  tasks you have completed, which task comes next, and
  how far you have to go. After you complete a stage, a checkmark will appear next to relative task, and you will be prompted to the next stage.
        </p>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="outline-dark" onClick={this.movePt1}><BsArrowLeft></BsArrowLeft></Button>
          <Button className="mr-5" variant="outline-dark" onClick={this.movePt3}><BsArrowRight></BsArrowRight></Button>
        </div>
      </div>
    } else if (this.state.pt3 === true) {
      jsx =
      <div>
        <p style= {{ textAlign: 'center' }}>
      Also, all of your work and progress will be saved to the notebook.
  Simply click on the icon representing the stage in the
  writing process you want to review, and your work will
  appear. To get started with a writing, simply click the button below!
        </p>
        <div className="d-flex justify-content-end">
          <Button className="mr-5" variant="outline-dark" onClick={this.movePt2}><BsArrowLeft></BsArrowLeft></Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button onClick={() => this.setState({ home: true })} variant="dark" className="mr-2"> + New Writing</Button>
        </div>
      </div>
    }

    return (
      <Container className="d-flex align-items-center" style= {{ height: '100vh' }}>
        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={8}>
            <CSSTransition in={true} appear={true} timeout={2000}
              classNames="heading">
              <h1 style={{ textAlign: 'center' }} className="mb-5">How it Works</h1>
            </CSSTransition>
            {jsx}
          </Col>
          <Col lg={2}>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Howitworks
