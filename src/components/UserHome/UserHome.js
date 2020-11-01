import React from 'react'
import NoteBookNav from './NoteBookNav/NoteBookNav'
import Spinner from 'react-bootstrap/Spinner'

class UserHome extends React.Component {
  state = {
    show: false
  }

  componentDidMount () {
    setTimeout(() => { this.setState({ show: !this.state.show }) }, 1500)
  }

  render () {
    let jsx
    if (this.state.show === false) {
      jsx =
      <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </div>
    } else {
      jsx =
      <div className="d-flex justify-content-start" style={{ width: '100%' }}>
        <NoteBookNav></NoteBookNav>
      </div>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default UserHome
