import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

class Spinning extends React.Component {
  render () {
    return (
      <div className="col-12 d-flex justify-content-center align-items-center">
        <Spinner animation="border" size="sm" />
      </div>
    )
  }
}

export default Spinning
