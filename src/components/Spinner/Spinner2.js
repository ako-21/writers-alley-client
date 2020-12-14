import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

class Spinning extends React.Component {
  render () {
    return (
      <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" />
      </div>
    )
  }
}

export default Spinning
