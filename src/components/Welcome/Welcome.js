import React from 'react'
import { Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Welcome extends React.Component {
  state = {
    show: true
  }

  componentDidMount () {
    setTimeout(() => { this.setState({ show: !this.state.show }) }, 4000)
  }

  render () {
    let jsx
    if (this.state.show === true) {
      jsx =
      <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <CSSTransition in={true} appear={true} timeout={2000}
          classNames="heading">
          <h1 className="ml-3 mb-2">Welcome to the Writer&apos;s Alley Interactive Writing Tutorial</h1>
        </CSSTransition>
      </div>
    } else {
      return <Redirect to='/howitworks' />
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default Welcome
