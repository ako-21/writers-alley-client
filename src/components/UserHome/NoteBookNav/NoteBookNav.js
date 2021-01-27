import React from 'react'
import NoteBookButton from './NoteBookButton'
import SideBar from './SideBar'

class NoteBookNav extends React.Component {
  state = {
    nbutton: true
  }

  handleClick = () => {
    this.setState({ nbutton: false })
  }

  handleClose = () => {
    this.setState({ nbutton: true })
  }

  render () {
    let jsx
    if (this.state.nbutton === true) {
      jsx =
      <NoteBookButton handleClick={this.handleClick}></NoteBookButton>
    } else {
      jsx =
      <SideBar isComplete={this.props.checklist.isComplete} writingId={this.props.writingId} userToken={this.props.userToken} handleClose={this.handleClose}></SideBar>
    }
    return (
      <React.Fragment>
        {jsx}
      </React.Fragment>
    )
  }
}

export default NoteBookNav
