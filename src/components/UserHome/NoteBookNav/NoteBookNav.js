import React from 'react'
import NoteBookButton from './NoteBookButton'
import CloseButton from './CloseButton'

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
      document.getElementById('notebooktoggle').className = 'notebooktoggleclose'
      jsx =
      <CloseButton handleClose={this.handleClose}></CloseButton>
    }
    return (
      <React.Fragment>
        {jsx}
      </React.Fragment>
    )
  }
}

export default NoteBookNav
