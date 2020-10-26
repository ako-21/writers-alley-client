import React from 'react'
import { CSSTransition } from 'react-transition-group'

class HeadingTwo extends React.Component {
  state = {
    show: false
  }

  componentDidMount () {
    setTimeout(() => { this.setState({ show: !this.state.show }) }, 1500)
  }

  render () {
    let jsx
    if (this.state.show) {
      jsx =
  <CSSTransition in={true} appear={true} timeout={2000}
    classNames="heading">
    <h1 className="home-page-heading">Write better to get where you want to go.</h1>
  </CSSTransition>
    } else {
      jsx = <div></div>
    }
    return (
      <div className="col-12 d-flex justify-content-center">
        {jsx}
      </div>
    )
  }
}

export default HeadingTwo
