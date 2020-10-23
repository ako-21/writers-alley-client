import React from 'react'
import { CSSTransition } from 'react-transition-group'

class HeadingOne extends React.Component {
  state = {
    show: false
  }

  render () {
    return (
      <div className="col-12 d-flex justify-content-center heading-div">
        <CSSTransition in={true} appear={true} timeout={2000}
          classNames="headingone">
          <h1 className="home-page-heading ml-3 mb-2">Open doors to better expression...</h1>
        </CSSTransition>
      </div>
    )
  }
}

export default HeadingOne
